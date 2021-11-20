// lib
import React from "react";
// style
import StoreDetail from "./mains/StoreDetail";
import StoreRestaurent from "./mains/StoreRestaurent";
const StoreView = () => (
  <div className="store-view-wrapper">
    <div className="container">
      <StoreDetail />
      <StoreRestaurent />
    </div>
  </div>
);

export default StoreView;
