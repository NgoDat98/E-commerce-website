import React from "react";
import Footer from "./Footer";
import LiveChat from "./LiveChat";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{props.children}</main>
      <LiveChat />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
