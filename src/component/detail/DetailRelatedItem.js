import { useHistory } from "react-router-dom";

const DetailRelatedItem = (props) => {
  const history = useHistory();

  const renderDetail = () => history.push(`/detail/${props.id}`);
  return (
    <li onClick={renderDetail}>
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

export default DetailRelatedItem;
