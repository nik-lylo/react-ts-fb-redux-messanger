import React, { FC } from "react";
import "./counter.scss";

interface CounterProps {
  amount: number;
}

const Counter: FC<CounterProps> = ({ amount }) => {
  return <div className="counter">{amount}</div>;
};

export default Counter;
