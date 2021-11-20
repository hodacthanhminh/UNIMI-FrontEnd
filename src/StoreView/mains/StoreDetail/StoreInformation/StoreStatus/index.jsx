import React from "react";

const StoreStatus = ({ status }) => (
  <div className="store-detail__status-wrapper">
    <div className="status-wrapper-inner">
      <span
        className={[
          `status-${status.isAvailable ? "available" : "no-available"}`,
          "status-state",
        ].join(" ")}
      >
        {status.title}
      </span>
    </div>
  </div>
);

export default StoreStatus;
