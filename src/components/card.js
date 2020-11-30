import React from "react";
import CountDown from "../components/CountDown";

const Card = () => {
  return (
    <div className="w-full p-6 mb-96 bg-gray-100 dark:bg-gray-700 transition">
      <div className="ml-4">
        <CountDown />
      </div>
    </div>
  );
};

export default Card;
