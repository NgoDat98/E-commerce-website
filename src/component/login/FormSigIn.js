import { useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "./FormSigIn.module.css";
import useInput from "../../hook/use-Login";

const FormSignIn = () => {
  const [fit, setFit] = useState(false);
  const history = useHistory();

  const goSignUp = () => history.push("/login/signup");
  const goAccount = (event) => history.push(`/login/id=${event}`);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const scanNo = () => {
    setFit(true);
    resetPasswordInput();
  };

  const scanYes = () => {
    setFit(false);
    resetEmailInput();
    resetPasswordInput();
  };

  //lấy dữ liệu tài khoản đăng ký
  let useArr;
  if (localStorage.getItem("userArr")) {
    useArr = JSON.parse(localStorage.getItem("userArr"));
  } else {
    useArr = null;
  }

  // kiểm tra xem tài khoản đã được đăng ký chưa
  let scan = null;

  const formSignInHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid) {
      return;
    }

    if (useArr.length > 0) {
      scan = useArr.filter(
        (x) => x.email === enteredEmail && x.password === enteredPassword
      );
    }

    if (scan.length > 0) {
      localStorage.setItem("Signin", JSON.stringify(scan));
    } else {
      scanNo();
    }

    if (!emailInputHasError && !emailInputHasError && scan.length === 0) {
      return scanNo();
    } else {
      scanYes();
    }

    goAccount(scan[0].id);
  };

  const emailInputClasses = emailInputHasError ? classes.invalid : "";
  const passwordInputClasses = passwordInputHasError ? classes.invalid : "";

  return (
    <form onSubmit={formSignInHandler}>
      <div className={classes.signin}>
        <h1>Sign In</h1>
        {fit && (
          <p className={classes.error}>Tài khoản hoặc mật khẩu chính xác!</p>
        )}
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
            <p className={classes.error}>Vui lòng nhập thông tin Email!</p>
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
            <p className={classes.error}>Vui lòng nhập thông tin mật khẩu!</p>
          )}
        </div>
        <button disabled={!formIsValid}>SIGN IN</button>
        <h4>
          Create an account? <span onClick={goSignUp}>Sign up</span>
        </h4>
      </div>
    </form>
  );
};

export default FormSignIn;
