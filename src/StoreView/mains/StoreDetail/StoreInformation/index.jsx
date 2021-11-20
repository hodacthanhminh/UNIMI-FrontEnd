// lib
import React from "react";
// components
import StoreInfo from "./StoreInfo";
import StorePrice from "./StorePrice";
import StoreStatus from "./StoreStatus";
import StoreTag from "./StoreTag";

const StoreInformation = () => {
  const store = {
    tagName: " Quán ăn",
    storeName: "Tạp hóa Hà Nội - 72 Tây Hòa",
    address: "72 Tây Hòa, Phước Long A, Quận 9, TP HCM",
    status: {
      title: "Đóng cửa",
      isAvailable: false,
    },
    price: {
      maxPrice: 400000,
      minPrice: 10000,
    },
  };

  return (
    <div className="store-detail__information-wrapper">
      <StoreTag tagName={store.tagName} />
      <StoreInfo storeName={store.storeName} storeAddress={store.address} />
      <StoreStatus status={store.status} />
      <StorePrice price={store.price} />
    </div>
  );
};

export default StoreInformation;
