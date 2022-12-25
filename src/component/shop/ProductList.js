import React from "react";

import List from "./List";
import Propduct from "./Product";
import classes from "./ProductList.module.css";

const ProductList = () => {
  return (
    <div className={classes.productlist}>
      <div className={classes.productlist1}>
        <h1>
          <i>SHOP</i>
        </h1>
        <h5>
          <i>SHOP</i>
        </h5>
      </div>
      <div className={classes.productlist2}>
        <List />
        <Propduct />
      </div>
    </div>
  );
};

export default ProductList;
