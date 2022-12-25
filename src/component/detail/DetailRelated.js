import DetailRelatedItem from "./DetailRelatedItem";
import classes1 from "./DetailRelated.module.css";

const DetailRelated = (props) => {
  return (
    <div className={classes1.related}>
      <h1>RELATED PRODUCT</h1>
      <ul>
        {props.item &&
          props.item.map((data) => (
            <DetailRelatedItem
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
    </div>
  );
};

export default DetailRelated;
