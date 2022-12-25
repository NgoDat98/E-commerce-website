import { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DetailAction } from "../../store/detail";
import classes from "./DetailShow.module.css";

const DetailShow = (props) => {
  const [cart, setCart] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const goCart = () => history.go("/cart");

  const listDiscription = useCallback(
    () => dispatch(DetailAction.ShowDescription(props.long_desc)),
    [dispatch, props.long_desc]
  );
  const listRelated = useCallback(
    () => dispatch(DetailAction.ShowRelated(props.category)),
    [dispatch, props.category]
  );

  useEffect(() => {
    listDiscription();
    listRelated();
  }, [listRelated, listDiscription]);

  const onChangeInput = (event) => {
    setCart(event.target.value);
  };

  let dataCart;
  if (localStorage.getItem("Cart")) {
    dataCart = JSON.parse(localStorage.getItem("Cart"));
  } else {
    dataCart = [];
  }

  const addItemHandler = (event) => {
    event.preventDefault();

    dataCart.push({
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
      quantity: Number(cart),
    });

    // if(cartArr.lenfth > 0 && dataCart.id === cartArr)

    if (cart > 0) {
      localStorage.setItem("Cart", JSON.stringify(dataCart));
    } else {
      return false;
    }

    goCart();
    alert("Đẫ thêm sản phẩm vào giỏ hàng");
  };

  return (
    <div className={classes.show}>
      <div className={classes.show1}>
        <img src={props.img1} alt="img1" />
        <img src={props.img2} alt="img2" />
        <img src={props.img3} alt="img3" />
        <img src={props.img4} alt="img4" />
      </div>
      <div className={classes.show2}>
        <img src={props.img4} alt="img4" />
      </div>
      <div className={classes.show3}>
        <h2>{props.name}</h2>
        <h4>{props.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</h4>
        <p>{props.short_desc}</p>
        <h5>
          CATEGORY:
          <span> {props.category}</span>
        </h5>
        <form onSubmit={addItemHandler}>
          <div>
            <input
              placeholder="QUANTITY"
              type="number"
              onChange={onChangeInput}
            />
            <button>Add to cart</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailShow;
