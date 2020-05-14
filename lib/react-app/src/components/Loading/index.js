import React from "react";
import { Spin } from "antd";
import "./index.css";

export default function LoadingComponent({ error, pastDelay }) {
  if (error) {
    return <div className="errText">加载错误</div>;
  } else {
    if (pastDelay) {
      return (
        <div className="loading">
          <Spin tip="Loading..." size="large" />
        </div>
      );
    } else {
      return null;
    }
  }
}
