import React, { memo } from "react";

const Loading = () => {
  return (
    <div className="loading-spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default memo(Loading);
