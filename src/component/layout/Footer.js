import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul>
        <h2>CUSTOMER SERVICES</h2>
        <li>Help & Contact Us</li>
        <li>Returns & Refunds</li>
        <li>Online Stores</li>
        <li>Terms & Condition</li>
      </ul>
      <ul>
        <h2>COMPANY</h2>
        <li>What We Do</li>
        <li>Available Servicer</li>
        <li>Latest Posts</li>
        <li>FAQs</li>
      </ul>
      <ul>
        <h2>SOCIAL MEDIA</h2>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Pinterest</li>
      </ul>
    </div>
  );
};

export default Footer;
