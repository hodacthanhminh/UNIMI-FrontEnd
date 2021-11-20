import React from "react";

const StorePrice = ({ price }) => (
  <div className="store-price-wrapper">
    <span>
      {price.minPrice} - {price.maxPrice}
    </span>
  </div>
);

export default StorePrice;
