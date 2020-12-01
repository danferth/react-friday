import React from "react";
import { ReactComponent as Akio } from "../images/svg/akio.svg";

const Footer = () => {
  return (
    <div className="mt-auto flex items-center justify-between lg:justify-center py-2 px-5 md:px-8 w-full bg-gray-50 dark:bg-gray-900 transition">
      <span className="serif text-xs md:text-sm lg:font-extralight text-gray-300 dark:text-gray-500 tracking-wider transition">
        made by{" "}
        <a className="underline" href="https://danferth.dev">
          danferth
        </a>
      </span>
      <Akio className="lg:ml-4 h-5 w-auto text-red-700 dark:text-red-600 fill-current self-end transition" />
    </div>
  );
};

export default Footer;
