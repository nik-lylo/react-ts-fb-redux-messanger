import React from "react";
import "./customLoader.css";

const CustomLoader = () => {
  return (
    <div className="custom_loader_container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CustomLoader;
