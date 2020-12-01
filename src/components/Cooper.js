import React from "react";
import cooper from "../images/cooper.jpg";
import { printToday } from "../util/util";

const Cooper = () => {
  return (
    <div className="md:self-start md:ml-12 flex items-center py-4 px-5 mb-5 sm:mb-3">
      <div className="relative h-0 w-14 pt-14 md:w-20 md:pt-20 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-600 transition">
        <img
          src={cooper}
          alt="cooper"
          className="absolute top-0 left-0 w-full h-full cover rounded-full"
        />
      </div>
      <div className="ml-4 md:ml-6">
        <p className="cursive text-sm md:text-base font-serif italic tracking-tight text-gray-400 dark:text-gray-500 transition">
          Cooper always says ...
        </p>
        <p className="serif mt-1 text-base md:text-lg font-medium text-gray-700 dark:text-gray-400 leading-tight tracking-tight transition">
          {printToday()} will be a good day!
        </p>
      </div>
    </div>
  );
};

export default Cooper;
