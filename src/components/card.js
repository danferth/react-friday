import React, { useRef } from "react";
import { useCountdown } from "./useCountdown";

const Card = () => {
  const theCount = useRef();
  theCount.current = useCountdown();
  return (
    <div className="w-full px-8 md:px-12 lg:p-0 xl:w-1/3 xl:mx-auto">
      <div className="grid gap-2.5 md:gap-3.5 xl:gap-5 grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 xl:grid-cols-2 xl:grid-rows-1">
        <Days>{theCount.current.days}</Days>
        <Hours>{theCount.current.hours}</Hours>
        <Minutes>{theCount.current.minutes}</Minutes>
        <Seconds>{theCount.current.seconds}</Seconds>
      </div>
      <p className="cursive text-center mt-6 sm:mt-3 md:mt-10 md:text-lg text-base font-medium font-serif text-gray-400 dark:text-gray-400 transition">
        Until Friday 5:00 pm
      </p>
    </div>
  );
};

const Days = (props) => {
  return (
    <Wrap grid="col-span-2 sm:row-span-2 xl:row-span-1">
      <div className="flex items-center justify-center py-3 h-full">
        <span className="text-9xl">{props.children}</span>
        <span className="-ml-5 leading-none text-4xl text-center font-thin font-sans tracking-widest inline-block uppercase transform -rotate-90">
          days
        </span>
      </div>
    </Wrap>
  );
};

const Hours = (props) => {
  return (
    <Wrap grid="col-span-2 sm:col-start-3 sm:col-span-2 xl:col-start-1">
      <div className="text-center leading-none flex items-center justify-center py-2 h-full">
        <span className="text-4xl">{props.children}</span>
        <span className="text-4xl uppercase font-sans font-black tracking-wide">
          hours
        </span>
      </div>
    </Wrap>
  );
};

const Minutes = (props) => {
  return (
    <Wrap grid="col-span-1 sm:col-start-3 sm:col-span-1 xl:col-start-1">
      <div className="flex justify-center flex-col items-center py-2.5 h-full">
        <span className="text-3xl">{props.children}</span>
        <span className="text-sm uppercase font-sans font-light leading-none tracking-wide">
          minutes
        </span>
      </div>
    </Wrap>
  );
};

const Seconds = (props) => {
  return (
    <Wrap grid="col-span-1 sm:col-start-4 sm:col-span-1 xl:col-start-2">
      <div className="flex justify-center flex-col items-center py-2.5 h-full">
        <span className="text-3xl">{props.children}</span>
        <span className="text-sm uppercase font-sans font-light leading-none tracking-wide">
          seconds
        </span>
      </div>
    </Wrap>
  );
};

const Wrap = (props) => {
  return (
    <div
      className={`${props.grid} rounded-md shadow-md xl:shadow-lg font-mono text-gray-300 bg-gray-100 dark:text-gray-800  dark:bg-gray-700 transition`}
    >
      {props.children}
    </div>
  );
};
export default Card;
