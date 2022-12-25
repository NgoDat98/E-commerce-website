import React from "react";
import Banner from "../component/home/Banner";
import ItemsList from "../component/home/ItemsList";
import Other from "../component/home/Other";
import TypeList from "../component/home/TypeList";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <TypeList />
      <ItemsList />
      <Other />
    </React.Fragment>
  );
};

export default HomePage;
