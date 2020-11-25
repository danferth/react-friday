import React, { useState, useEffect } from "react";
import { countdown } from "../util/time";

const CountDown = () => {
  const [count, setCount] = useState(countdown());

  useEffect(() => {
    setInterval(() => setCount(countdown()), 1000);
  }, []);

  return (
    <p className="text-xs text-blue-800 dark:text-blue-200 leading-normal transition">
      {`${count.days} : ${count.hours} : ${count.minutes} : ${count.seconds} untill Friday 5:00PM`}
    </p>
  );
};

export default CountDown;
