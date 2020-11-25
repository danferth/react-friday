import React from "react";
import { useThemeUpdate } from "../util/ThemeContext";

const DarkSwitch = () => {
  return (
    <div className=" absolute top-0 right-0 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg rounded-t-none rounded-r-none z-50 transition">
      <label
        className="flex items-center text-xs text-gray-400 dark:text-gray-100 transition"
        htmlFor="darkSwitch"
      >
        <span>Dark Mode</span>
        <input
          className="ml-2.5 rounded-full p-2.5 bg-yellow-100 focus:ring-yellow-300 border-none text-gray-800"
          id="darkSwitch"
          type="checkbox"
          onClick={useThemeUpdate()}
        />
      </label>
    </div>
  );
};

export default DarkSwitch;
