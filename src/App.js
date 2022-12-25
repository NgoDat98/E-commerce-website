import React, { Suspense } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
// import HomePage from "./page/HomePage";
// import ShopPage from "./page/ShopPage";
// import DetailPage from "./page/DetailPage";
// import CaetPage from "./page/CaetPage";
// import CheckoutPage from "./page/CheckoutPage";
// import LoginPage from "./page/LoginPage";
// import RegisterPage from "./page/RegisterPage";
import Layout from "./component/layout/Layout";

const HomePage = React.lazy(() => import("./page/HomePage"));
const ShopPage = React.lazy(() => import("./page/ShopPage"));
const DetailPage = React.lazy(() => import("./page/DetailPage"));
const CaetPage = React.lazy(() => import("./page/CaetPage"));
const CheckoutPage = React.lazy(() => import("./page/CheckoutPage"));
const LoginPage = React.lazy(() => import("./page/LoginPage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
          <Route path="/cart" exact>
            <CaetPage />
          </Route>
          <Route path={"/checkout"}>
            <CheckoutPage />
          </Route>
          <Route path="/login/:id">
            <LoginPage />
          </Route>
          {/* <Route path="/register">
          <RegisterPage />
        </Route> */}
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
