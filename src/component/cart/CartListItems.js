import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CartAction } from "../../store/cart";

const CartListItems = (props) => {
  const ref = useRef(props.quantity);

  const [item, setitem] = useState(ref.current);

  const dispatch = useDispatch();
  const show = useSelector((state) => state.cart.showItem);

  const tangHandler = (data) => dispatch(CartAction.fixdata(data));
  const deleteHandler = () => dispatch(CartAction.delete(props.id));

  const addItem = () => {
    setitem((abc) => abc + 1);
    fixDataCong();
    tangHandler(data);
  };

  const reducerItem = () => {
    setitem((abc) => abc - 1);
    fixDataTru();
    tangHandler(data);
  };

  let data;

  const fixDataCong = () => {
    data = {
      id: props.id,
      name: props.name,
      price: Number(props.price),
      category: props.category,
      short_desc: props.short_desc,
      long_desc: props.long_desc,
      img1: props.img1,
      img2: props.img2,
      img3: props.img3,
      img4: props.img4,
      quantity: Number(item + 1),
    };
  };

  const fixDataTru = () => {
    data = {
      id: props.id,
      name: props.name,
      price: Number(props.price),
      category: props.category,
      short_desc: props.short_desc,
      long_desc: props.long_desc,
      img1: props.img1,
      img2: props.img2,
      img3: props.img3,
      img4: props.img4,
      quantity: Number(item - 1),
    };
  };

  useEffect(() => {}, [show, props, item]);

  return (
    <ul>
      <li>
        <img src={props.img1} alt="img1" />
      </li>
      <li>{props.name}</li>
      <li>
        <p>
          {props.price.toFixed(true).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} VNĐ
        </p>
      </li>
      <li>
        <button onClick={reducerItem}>◀</button>
        {item}
        <button onClick={addItem}>▶</button>
      </li>
      <li>
        <p>
          {(props.price * item)
            .toFixed(true)
            .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
          VNĐ
        </p>
      </li>
      <li onClick={deleteHandler} style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={faTrashCan} color="gray" />
      </li>
    </ul>
  );
};

export default CartListItems;
