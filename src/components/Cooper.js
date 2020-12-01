import React from "react";
import cooper from "../images/cooper.jpg";
import { printToday } from "../util/util";

const Cooper = () => {
  return (
    <div className="flex items-center py-4 px-5 mb-5">
      <div className="relative w-14 h-0 pt-14 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-600 transition">
        <img
          src={cooper}
          alt="cooper"
          className="absolute top-0 left-0 w-full h-full cover rounded-full"
        />
      </div>
      <div className="ml-4">
        <p className="cursive text-sm font-serif italic tracking-tight text-gray-400 dark:text-gray-500 transition">
          Cooper always says ...
        </p>
        <p className="serif mt-1 text-base font-medium text-gray-700 dark:text-gray-400 leading-tight tracking-tight transition">
          {printToday()} will be a good day!
        </p>
      </div>
    </div>
  );
};

export default Cooper;
