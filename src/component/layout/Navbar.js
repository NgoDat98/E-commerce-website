import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const history = useHistory();
  const parmas = useParams();

  function goHome() {
    history.push("/");
  }

  function goShop() {
    history.push("/shop");
  }

  function goCart() {
    history.push("/cart");
  }
  function goLogin() {
    history.push(`/login/${parmas.id}`);
  }

  function goSignin() {
    history.push("/login/signin");
  }

  //lấy dữ data user trên localstore

  let userArr;
  if (localStorage.getItem("Signin")) {
    userArr = JSON.parse(localStorage.getItem("Signin"));
  } else {
    userArr = null;
  }

  // tạo sự kiện logout

  const logOut = () => {
    localStorage.removeItem("Signin");
    goSignin();
  };

  return (
    <div className={classes.navbar}>
      <div>
        <button
          onClick={goHome}
          className={history.location.pathname === "/" ? classes.abc : ""}
        >
          Home
        </button>
        <button
          onClick={goShop}
          className={history.location.pathname === "/shop" ? classes.abc : ""}
        >
          Shop
        </button>
      </div>
      <h1>BOUTIQUE</h1>
      <div>
        <button
          onClick={goCart}
          className={history.location.pathname === "/cart" ? classes.abc : ""}
        >
          <FontAwesomeIcon icon={faCartFlatbed} />
          Cart
        </button>
        {userArr && (
          <button
            onClick={goLogin}
            className={
              history.location.pathname === "/login/undefined"
                ? classes.abc
                : ""
            }
          >
            <FontAwesomeIcon icon={faUser} /> {userArr[0].name}
            <select name="account">
              <option value="account"></option>
            </select>
          </button>
        )}
        {userArr && <button onClick={logOut}>(Logout)</button>}
        {!userArr && (
          <button
            onClick={goSignin}
            className={
              history.location.pathname === "/login/signin" ? classes.abc : ""
            }
          >
            <FontAwesomeIcon icon={faUser} />
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
