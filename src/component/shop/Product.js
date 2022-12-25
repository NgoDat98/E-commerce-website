import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import useProduct from "../../hook/use-Product";
import ProductItem from "./ProductItem";
import classes from "./Product.module.css";

const Product = () => {
  const [items, setItems] = useState();
  const category = useSelector((state) => state.category.category);
  const ItemsListData = (data) => {
    setItems(data);
  };

  const { productData } = useProduct(ItemsListData);

  useEffect(() => {
    productData();
  }, [productData]);

  let item = [];

  if (category === "") {
    item = items;
  }
  if (category) {
    item = items.filter((x) => x.category === category);
  }

  return (
    <div className={classes.product}>
      <div className={classes.product1}>
        <input placeholder="   Enter Search Here!" />
        <select name="sorting">
          <option value="Default">Default sorting</option>
        </select>
      </div>
      <ul>
        {item &&
          item.map((data) => (
            <ProductItem
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
      </ul>
      <div className={classes.product2}>
        <div className={classes.product3}>
          <button> ⋘ </button>
          <h4>1</h4>
          <button> ⋙</button>
        </div>
        <p>
          <i>Showing 1-9 of 9 resuits</i>
        </p>
      </div>
    </div>
  );
};

export default Product;
