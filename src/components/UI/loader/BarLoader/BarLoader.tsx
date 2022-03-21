import React, { FC } from "react";
import "./barLoader.css";

interface BarLoaderProps {
  blockSize: string;
}

const BarLoader: FC<BarLoaderProps> = ({ blockSize }) => {
  return (
    <div className="flex-container">
      <div
        className="loader"
        style={{ width: blockSize, height: blockSize }}
      ></div>
    </div>
  );
};

export default BarLoader;
