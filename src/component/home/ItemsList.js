import React, { useState, useEffect } from "react";
import ListData from "./ListData";
import classes1 from "./ItemsList.module.css";
import Popup from "./Popup";
import useProduct from "../../hook/use-Product";

const ItemsList = () => {
  const [items, setItems] = useState();
  const ItemsListData = (data) => {
    setItems(data);
  };

  const { productData } = useProduct(ItemsListData);

  useEffect(() => {
    productData();
  }, [productData]);

  return (
    <div className={classes1.items}>
      <h3>
        <i>MADE THE HARD WAY</i>
      </h3>
      <h2>
        <i>TOP TRENDING PRODUCTS</i>
      </h2>
      <ul className={classes1.list}>
        {items &&
          items.map((data) => (
            <ListData
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
            />
          ))}

        <Popup />
      </ul>
    </div>
  );
};

export default ItemsList;
