import React, { useState, useEffect } from "react";
import { countdown } from "../util/time";

const CountDown = () => {
  const [count, setCount] = useState(countdown());

  useEffect(() => {
    setInterval(() => setCount(countdown()), 1000);
  }, []);

  return (
    <p className="flex items-baseline space-x-1.5">
      <span className="space-x-1">
        <Digit>{count.days}</Digit>
        <S />
        <Digit>{count.hours}</Digit>
        <S />
        <Digit>{count.minutes}</Digit>
        <S />
        <Digit>{count.seconds}</Digit>
      </span>
      <span className=" text-xs font-medium text-blue-800 dark:text-blue-400 leading-normal transition">
        untill Friday 5:00PM
      </span>
    </p>
  );
};

const Digit = (props) => {
  return (
    <span className="text-xs font-mono text-blue-800 dark:text-blue-200 leading-normal transition">
      {props.children}
    </span>
  );
};

const S = () => {
  return (
    <span className="text-xs font-semibold text-blue-800 dark:text-blue-400 leading-normal transition">
      :
    </span>
  );
};

export default CountDown;
