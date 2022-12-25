import { useSelector } from "react-redux";

import classes from "./CartList.module.css";
import CartListItems from "./CartListItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

const CartList = () => {
  const show = useSelector((state) => state.cart.showItem);

  let totalCart = 0;
  for (let key of show) {
    totalCart += key.quantity * key.price;
  }

  console.log(totalCart);

  return (
    <div className={classes.cartlist}>
      <div className={classes.cartlist1}>
        <ul className={classes.ultitle}>
          <li>IMAGE</li>
          <li>PRODUCT</li>
          <li>PROCE</li>
          <li>QUANTITY</li>
          <li>TOTAL</li>
          <li>REMOVE</li>
        </ul>

        {show.length > 0 &&
          show.map((data) => (
            <CartListItems
              key={Math.random()}
              id={data.id}
              name={data.name}
              price={data.price}
              category={data.category}
              short_desc={data.short_desc}
              long_desc={data.long_desc}
              img1={data.img1}
              img2={data.img2}
              img3={data.img3}
              img4={data.img4}
              quantity={data.quantity}
            />
          ))}
        {show.length === 0 && <h1>chưa có sản phẩm nào trong giỏ hàng!</h1>}
      </div>
      <div className={classes.cartlist2}>
        <h3>CART TOTAL</h3>
        <h4>
          SUBTOTAL
          <span style={{ fontSize: "smaller", color: "gray" }}>
            {totalCart.toFixed(true).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} VNĐ
          </span>
        </h4>
        <h4 className={classes.h4total}>
          TOTAL
          <span>
            {totalCart.toFixed(true).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} VNĐ
          </span>
        </h4>
        <input placeholder="Enter your coupon" />
        <button>
          <FontAwesomeIcon icon={faGift} /> Apply coupon
        </button>
      </div>
    </div>
  );
};

export default CartList;
