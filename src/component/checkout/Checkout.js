import BullingTotal from "./BullingTotal";
import classes from "./Checkout.module.css";
import FormBulling from "./FormBilling";

const Checkout = () => {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout1}>
        <h1>Checkout</h1>
        <div className={classes.checkout2}>
          <h5>HOME/</h5>
          <h5>CART/</h5>
          <h5 style={{ color: "rgba(59, 57, 57, 0.318)" }}>CHECKOUT</h5>
        </div>
      </div>
      <h1 style={{ fontWeight: 500, fontStyle: "italic" }}>BILLING DETAILS</h1>
      <div style={{ display: "flex" }}>
        <FormBulling />
        <BullingTotal />
      </div>
    </div>
  );
};

export default Checkout;
