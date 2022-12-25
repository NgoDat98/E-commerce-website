import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import useProduct from "../../hook/use-Product";
import DetailDescription from "./DetailDescription";
import DetailRelated from "./DetailRelated";
import DetailShow from "./DetailShow";

const Detail = () => {
  const [items, setItems] = useState();
  const math = useRouteMatch();
  const valueData = useSelector((state) => state.detail.value);

  const ItemsListData = (data) => {
    setItems(data);
  };

  const { productData } = useProduct(ItemsListData);

  useEffect(() => {
    productData();
  }, [productData]);

  let filterShowDetail;
  let filterShowRelated;

  if (items) {
    filterShowDetail = items.filter((x) => x.id === math.params.id);
  }

  if (items && valueData) {
    filterShowRelated = items.filter((x) => x.category === valueData);
  }

  return (
    <React.Fragment>
      {filterShowDetail &&
        filterShowDetail.map((data) => (
          <DetailShow
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
      <DetailDescription />
      <DetailRelated
        item={filterShowRelated !== undefined && filterShowRelated}
      />
    </React.Fragment>
  );
};

export default Detail;
