import { useHistory, Prompt } from "react-router-dom";
import React, { useState } from "react";

import classes from "./FormSignUp.module.css";
import useInput from "../../hook/use-Login";

const FormSignUp = () => {
  const [focus, setfocus] = useState(false);
  const history = useHistory();

  const goFormSignIn = () => history.push("/login/signin");
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 8);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim() !== "");

  // kiểm tra xem người dùng đã điền đầy đủ thông tin hay chưa
  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredPhoneIsValid
  ) {
    formIsValid = true;
  }

  // kiểm tra xem email đã tồn tại hay chưa
  let scan;

  // thêm thông tin đăng ksy vào tài localstore
  let useArr;
  if (localStorage.getItem("userArr")) {
    useArr = JSON.parse(localStorage.getItem("userArr"));
  } else {
    useArr = [];
  }

  const formSignUpHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    scan = useArr.filter((x) => x.email === enteredEmail);

    if (scan.length > 0) {
      alert("Đăng ký thất bại,Email đã được tồn tại!");
      return false;
    }

    useArr.push({
      id: Math.random(),
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    });

    if (useArr) {
      localStorage.setItem("userArr", JSON.stringify(useArr));
      alert("Đăng ký tài khoản thành công");
    }

    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetPhoneInput();
    goFormSignIn();
  };

  // sử lý sự cố nếu người dùng không may re-loading lại trang khi đang nhập thông tin đăng ký
  const SubmitHandler = () => {
    setfocus(false);
  };

  const focusHandler = () => {
    setfocus(true);
  };

  const nameInputClasses = nameInputHasError ? classes.invalid : "";
  const emailInputClasses = emailInputHasError ? classes.invalid : "";
  const passwordInputClasses = passwordInputHasError ? classes.invalid : "";
  const phoneInputClasses = phoneInputHasError ? classes.invalid : "";

  return (
    <React.Fragment>
      <Prompt
        when={focus}
        message={() =>
          "Bạn có chắc là muốn chuyến hướng khi chưa đăng ký xong thông tin?"
        }
      />
      <form onFocus={focusHandler} onSubmit={formSignUpHandler}>
        <div className={classes.signup}>
          <h1>Sign Up</h1>
          <div>
            <input
              placeholder="    Full Name"
              type="text"
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              className={nameInputClasses}
            />
            {nameInputHasError && (
              <p className={classes.error}>
                Vui lòng điền thông tin họ và tên!
              </p>
            )}
          </div>
          <div>
            <input
              placeholder="    Email"
              type="text"
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              className={emailInputClasses}
            />
            {emailInputHasError && (
              <p className={classes.error}>Vui lòng điền thông tin Email!</p>
            )}
          </div>
          <div>
            <input
              placeholder="    Password"
              type="password"
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              className={passwordInputClasses}
            />
            {passwordInputHasError && (
              <p className={classes.error}>Mật khẩu có ít nhất là 8 ký tự!</p>
            )}
          </div>
          <div>
            <input
              placeholder="    Phone"
              type="number"
              onChange={phoneChangedHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
              className={phoneInputClasses}
            />
            {phoneInputHasError && (
              <p className={classes.error}>Vui lòng nhập số điện thoại!</p>
            )}
          </div>
          <button disabled={!formIsValid} onClick={SubmitHandler}>
            SIGN UP
          </button>
          <h4>
            Login?<span onClick={goFormSignIn}>Click</span>
          </h4>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FormSignUp;
