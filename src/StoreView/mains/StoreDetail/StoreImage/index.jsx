// lib
import React from "react";
// other
import storeImage from "../../../../assets/storeImage.jpeg";

const StoreImage = () => {
  return (
    <div className="store-detail-image">
      <img src={storeImage} alt="đây là hình một cái store" />
    </div>
  );
};

export default StoreImage;
