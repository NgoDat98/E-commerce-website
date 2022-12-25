import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./Popup.module.css";
import { useHistory } from "react-router-dom";

import { PopupAction } from "../../store/popup";
import { useDispatch, useSelector } from "react-redux";

const Popup = () => {
  const hide = useSelector((state) => state.popup.showPopup);
  const data = useSelector((state) => state.popup.popup);
  const dispatch = useDispatch();
  const history = useHistory();

  const close = () => dispatch(PopupAction.HIDE_POPUP());
  const goShop = () => history.push("/shop");

  if (data === null && hide === true) {
    return (
      <div className={classes.popup}>
        <div className={classes.div1}>
          <div>
            <h4 onClick={close}>X</h4>
            <h1>không có dữ liệu</h1>
          </div>
        </div>
      </div>
    );
  }
  if (data !== null && hide === true) {
    return (
      <div className={classes.popup}>
        <div className={classes.div1}>
          <img src={data.img1} />
          <div>
            <h4 onClick={close}>X</h4>
            <h3>{data.name}</h3>
            <h5>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</h5>
            <p>{data.short_desc}</p>
            <button onClick={goShop}>
              <FontAwesomeIcon icon={faCartShopping} /> View Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Popup;
