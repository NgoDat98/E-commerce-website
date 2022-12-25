import classes from "./Other.module.css";

const Other = () => {
  return (
    <div className={classes.other}>
      <ul className={classes.ul1}>
        <li>
          <h4>
            <i>FREE SHIPING</i>
          </h4>
          <p>
            <i>Free shiping worlwide</i>
          </p>
        </li>
        <li>
          <h4>
            <i>24 X 7 SERVICE</i>
          </h4>
          <p>
            <i>Free shiping worlwide </i>
          </p>
        </li>
        <li>
          <h4>
            <i>FESTIVAL OFFER</i>
          </h4>
          <p>
            <i>Free shiping worlwide</i>
          </p>
        </li>
      </ul>
      <ul className={classes.ul2}>
        <li>
          <h4>
            <i>LET'S BE FRIENDS!</i>
          </h4>
          <p>
            <i>Nisi nisi tempor consequat laboris nisi</i>
          </p>
        </li>
        <li>
          <input placeholder="Enter your email address" />
          <button>Subscribe</button>
        </li>
      </ul>
    </div>
  );
};

export default Other;
