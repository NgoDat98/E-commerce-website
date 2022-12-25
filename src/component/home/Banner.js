import React from "react";
import { Link } from "react-router-dom";

import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <h4>
        <i>NEW INSPIRATION 2022</i>
      </h4>
      <h1>
        <i>20% OFF ON NEW SEASON</i>
      </h1>
      <button>
        <Link to="/shop">
          <i>Browse collections</i>
        </Link>
      </button>
    </div>
  );
};

export default Banner;
