import React from "react";
import { useDispatch } from "react-redux";
import { PopupAction } from "../../store/popup";

const ListData = (props) => {
  const dispatch = useDispatch();

  const openPopup = () =>
    dispatch(
      PopupAction.SHOW_POPUP({
        id: props.id,
        name: props.name,
        price: props.price,
        long_desc: props.long_desc,
        short_desc: props.short_desc,
        category: props.category,
        img1: props.img1,
        img2: props.img2,
        img3: props.img3,
        img4: props.img4,
      })
    );

  return (
    <li onClick={openPopup}>
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

export default ListData;
