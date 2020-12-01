import React from "react";
import { ReactComponent as Akio } from "../images/svg/akio.svg";

const Footer = () => {
  return (
    <div className="mt-auto flex items-center justify-between py-2 px-5 w-full bg-gray-50 dark:bg-gray-900 transition">
      <span className="text-xs text-gray-300 dark:text-gray-500 font-mono transition">
        made by{" "}
        <a className="underline" href="https://danferth.dev">
          danferth
        </a>
      </span>
      <Akio className="h-5 w-auto text-red-700 dark:text-red-600 fill-current self-end transition" />
    </div>
  );
};

export default Footer;
