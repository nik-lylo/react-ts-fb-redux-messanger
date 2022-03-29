import React, { FC } from "react";
import "./counter.scss";

interface CounterProps {
  amount: number;
}

const Counter: FC<CounterProps> = ({ amount }) => {
  return <div className="counter">{amount < 10 ? amount : `9+`}</div>;
};

export default Counter;
