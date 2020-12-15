import React from "react";
import cooper from "../images/cooper.jpg";
import { printToday } from "../util/util";
// import useAffirmation from "./useAffirmation";
const Cooper = () => {
  return (
    <div className="md:ml-0 lg:self-center xl:mx-auto xl:-mt-20 flex items-center md:flex-col py-4 px-5 lg:p-0 mb-5 sm:mb-3 md:mb-20 lg:mb-0">
      <div className="relative md:shadow-mdh-0 w-14 pt-14 md:w-24 md:pt-24 xl:w-36 xl:pt-36 md:mb-2 rounded-full overflow-hidden ring-2 xl:ring-4 ring-gray-200 dark:ring-gray-600 transition">
        <img
          src={cooper}
          alt="cooper"
          className="absolute top-0 left-0 w-full h-full cover rounded-full"
        />
      </div>
      <div className="ml-4 md:ml-0 text-left md:text-center">
        <p className="cursive text-sm md:text-base lg:mb-4 font-serif italic tracking-tight md:tracking-normal text-gray-400 dark:text-gray-500 transition">
          It's {printToday()}, Cooper says ...
        </p>
        <p className="serif mt-1 text-base md:text-lg font-medium text-gray-700 dark:text-gray-400 leading-tight tracking-tight md:tracking-normal transition">
          {/* {useAffirmation()} */}
        </p>
      </div>
    </div>
  );
};

export default Cooper;
