import React from "react";
import { printToday } from "../util/util";
import { ReactComponent as AkioSVG } from "../images/svg/akio.svg";
import cooper from "../images/cooper.jpg";
import CountDown from "../components/CountDown";

const Card = () => {
  return (
    <div className="flex-shrink max-h-32 w-1/3 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-xl flex flex-row items-center justify-start transition">
      <AkioSVG className="h-8 w-auto text-red-600 dark:text-red-400 fill-current justify-self-start transition" />
      <div className="ml-4">
        <h1 className="text-lg font-medium text-blue-700 dark:text-blue-300 leading-tight transition">
          {printToday()} will be a good day :)
        </h1>
        <CountDown />
      </div>
      <div className="relative w-20 h-0 pt-20 rounded-full ml-auto overflow-hidden ring-2 ring-green-500">
        <img
          src={cooper}
          alt="cooper"
          className="absolute top-0 left-0 w-full h-full cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Card;
