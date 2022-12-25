import classes from "./TypeList.module.css";

const TypeList = () => {
  return (
    <div className={classes.type}>
      <h4>CAREFULLY CREATED COLLECTIONS</h4>
      <h2>BROWSE OUR CATEGORIES</h2>
      <div className={classes.div1}>
        <img src="product_1.png" alt="iPhone" />
        <img src="product_2.png" alt="Mac" />
      </div>
      <div className={classes.div2}>
        <img src="product_3.png" alt="iPad" />
        <img src="product_4.png" alt="WATCH" />
        <img src="product_5.png" alt="AirPods" />
      </div>
    </div>
  );
};

export default TypeList;
