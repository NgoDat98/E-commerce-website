import { useHistory } from "react-router-dom";

import classes from "./Cart.module.css";
import CartList from "./CartList";

const Cart = () => {
  const history = useHistory();

  const goShoping = () => history.push("/shop");
  const goCheckout = () => history.push("/checkout");
  return (
    <div className={classes.cart}>
      <div className={classes.cart1}>
        <h1>Cart</h1>
        <h5>Cart</h5>
      </div>
      <h2 style={{ fontWeight: 500, marginTop: 50, fontStyle: "italic" }}>
        SHOPPING CART
      </h2>
      <CartList />
      <div className={classes.cart2}>
        <div className={classes.shopcss}>
          <button onClick={goShoping}>← Continue shopping</button>
        </div>
        <div className={classes.checkoutcss}>
          <button onClick={goCheckout}>Proceed to checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
