import React from "react";
import { Switch, Route, useParams } from "react-router-dom";

import FormSignIn from "./FormSigIn";
import FormSignUp from "./FormSignUp";
import classes from "./Login.module.css";

const Login = () => {
  const parmas = useParams();

  // lấy dữ data từ localstore về
  let userArr;

  if (localStorage.getItem("Signin")) {
    userArr = JSON.parse(localStorage.getItem("Signin"));
  } else {
    userArr = null;
  }

  return (
    <div className={classes.login}>
      <Switch>
        <Route path="/login/signin">
          <FormSignIn />
        </Route>
        {userArr && (
          <Route path={`/login/${parmas.id}`}>
            <h1 className={classes.login1}>Hello {userArr[0].name} !</h1>
          </Route>
        )}
        <Route path="/login/signup">
          <FormSignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default Login;
