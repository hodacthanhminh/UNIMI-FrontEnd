import React from "react";

const StoreInfo = ({ storeAddress, storeName }) => (
  <div className="store-detail__info-wrapper">
    <div className="info-wrapper-inner">
      <h3 className="info-name"> {storeName}</h3>
      <span className="info-address"> {storeAddress}</span>
    </div>
  </div>
);

export default StoreInfo;
