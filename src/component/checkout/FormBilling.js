import classes from "./FormBulling.module.css";

const FormBulling = () => {
  return (
    <form className={classes.formbulling}>
      <h5>FULL NAME:</h5>
      <input placeholder="Enter Your Full Name Here!" />
      <h5>EMAIL:</h5>
      <input placeholder="Enter Your Email Here!" />

      <h5>PHONE NUMBER:</h5>
      <input placeholder="Enter Your Phone Number Here!" />
      <h5>ADDRESS:</h5>
      <input placeholder="Enter Your Address Here!" />

      <button>Place order</button>
    </form>
  );
};

export default FormBulling;
