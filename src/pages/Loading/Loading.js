import { Spin } from "antd";
import React from "react";

function Loading(props) {
  return (
    <div className="loading-container">
      <Spin tip="Loading..."/>
    </div>
  );
}

export default Loading;
