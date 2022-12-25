import { useSelector } from "react-redux";

import classes from "./BullingTotal.module.css";

const BullingTotal = () => {
  const show = useSelector((state) => state.cart.showItem);

  let total = 0;
  for (let key of show) {
    total += key.quantity * key.price;
  }

  return (
    <div className={classes.bullingtotal}>
      <h2>YOUR ORDER</h2>
      {show.map((x) => (
        <div className={classes.bullingtotal1}>
          <h4 key={x.id}>{x.name}</h4>
          <p>{`${x.price
            .toFixed(true)
            .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} VNĐ X ${x.quantity}`}</p>
        </div>
      ))}
      <div className={classes.bullingtotal2}>
        <h3>TOTAL:</h3>
        <p>{total.toFixed(true).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} VNĐ</p>
      </div>
    </div>
  );
};

export default BullingTotal;
