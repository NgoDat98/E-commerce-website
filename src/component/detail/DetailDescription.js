import React, { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./DetailDescription.module.css";

const DetailDescription = () => {
  const [show, setshow] = useState(false);
  const dataDescription = useSelector((state) => state.detail.showItem);

  const showDescription = () => setshow(!show);

  return (
    <div className={classes.description}>
      <button onClick={showDescription}>DESCRIPTION</button>
      {show && (
        <div
          dangerouslySetInnerHTML={{
            __html: dataDescription.replace(/•/g, "<br /> -"),
          }}
        />
      )}
    </div>
  );
};

export default DetailDescription;
