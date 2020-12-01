import React, { useRef } from "react";
import { useCountdown } from "./useCountdown";

const Card = () => {
  const theCount = useRef();
  theCount.current = useCountdown();
  return (
    <>
      <div className="grid gap-2.5 grid-cols-2 w-full px-8">
        <Days>{theCount.current.days}</Days>
        <Hours>{theCount.current.hours}</Hours>
        <Minutes>{theCount.current.minutes}</Minutes>
        <Seconds>{theCount.current.seconds}</Seconds>
      </div>
      <p className="text-center mt-6 text-base italic font-medium font-serif tracking-wide text-gray-400 dark:text-gray-300 transition">
        Until Friday 5:00 pm PST ...
      </p>
    </>
  );
};

const Days = (props) => {
  return (
    <Wrap col="col-span-2">
      <div className="flex items-center justify-center py-3">
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
    <Wrap col="col-span-2">
      <div className="text-center leading-none flex items-center justify-center py-2">
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
    <Wrap col="col-span-1">
      <div className="flex justify-center flex-col items-center py-2.5">
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
    <Wrap col="col-span-1">
      <div className="flex justify-center flex-col items-center py-2.5">
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
      className={`${props.col} rounded-md shadow-md font-mono text-gray-300 bg-gray-100 dark:text-gray-800  dark:bg-gray-700 transition`}
    >
      {props.children}
    </div>
  );
};
export default Card;
