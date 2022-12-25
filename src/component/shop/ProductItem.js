import React from "react";
import { useHistory } from "react-router-dom";

const ProductItem = (props) => {
  const history = useHistory();

  const goDetail = () => history.push(`/detail/${props.id}`);

  return (
    <li onClick={goDetail}>
      <img src={props.img1} alt="image" />

      <h4>
        <i>{props.name}</i>
      </h4>
      <p>
        <i>{props.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</i>
      </p>
    </li>
  );
};

export default ProductItem;
