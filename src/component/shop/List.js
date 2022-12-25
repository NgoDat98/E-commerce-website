import classes from "./List.module.css";
import { useDispatch, useSelector } from "react-redux";

import { CategoryAction } from "../../store/category";

const List = () => {
  const color = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  const all = () => dispatch(CategoryAction.All());
  const iphone = () => dispatch(CategoryAction.Iphone());
  const ipad = () => dispatch(CategoryAction.Ipad());
  const macbook = () => dispatch(CategoryAction.Macbook());
  const airpod = () => dispatch(CategoryAction.Airpod());
  const watch = () => dispatch(CategoryAction.Watch());
  const mouse = () => dispatch(CategoryAction.Mouse());
  const keyboard = () => dispatch(CategoryAction.Keyboard());
  const other = () => dispatch(CategoryAction.Other());

  return (
    <div className={classes.list}>
      <h1>
        <i>CATEGORIES</i>
      </h1>
      <h2>
        <i>APPLE</i>
      </h2>
      <h5 onClick={all} className={color === "" ? classes.abc : ""}>
        <i>All</i>
      </h5>
      <div>
        <h3>
          <i>IPHONE & MAC</i>
        </h3>
        <h5 onClick={iphone} className={color === "iphone" ? classes.abc : ""}>
          <i>iPhone</i>
        </h5>
        <h5 onClick={ipad} className={color === "ipad" ? classes.abc : ""}>
          <i>Ipad</i>
        </h5>
        <h5
          onClick={macbook}
          className={color === "macbook" ? classes.abc : ""}
        >
          <i>Macbook</i>
        </h5>
      </div>
      <div>
        <h3>
          <i>WIRELESS</i>
        </h3>
        <h5 onClick={airpod} className={color === "airpod" ? classes.abc : ""}>
          <i>Airpod</i>
        </h5>
        <h5 onClick={watch} className={color === "watch" ? classes.abc : ""}>
          <i>Watch</i>
        </h5>
      </div>
      <div>
        <h3>
          <i>OTHER</i>
        </h3>
        <h5 onClick={mouse} className={color === "mouse" ? classes.abc : ""}>
          <i>Mouse</i>
        </h5>
        <h5
          onClick={keyboard}
          className={color === "keyboard" ? classes.abc : ""}
        >
          <i>Keyboard</i>
        </h5>
        <h5 onClick={other} className={color === "other" ? classes.abc : ""}>
          <i>Other</i>
        </h5>
      </div>
    </div>
  );
};

export default List;
