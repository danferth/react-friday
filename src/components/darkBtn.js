import React, { useRef } from "react";
import { useTheme, useThemeUpdate } from "../util/ThemeContext";
import { ReactComponent as Sun } from "../images/svg/sun.svg";
import { ReactComponent as Moon } from "../images/svg/moon.svg";

const DarkSwitch = () => {
  const theme = useRef();
  theme.current = useTheme();
  return (
    <div
      className={`absolute top-4 right-4 p-2 bg-gray-700 dark:bg-gray-50 rounded-full z-50 transition`}
    >
      <label className="relative transition" htmlFor="darkSwitch">
        {theme.current ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-200" />
        )}
        <input
          className="w-0 h-0 absolute top-0 left-0 hidden"
          id="darkSwitch"
          type="checkbox"
          onClick={useThemeUpdate()}
        />
      </label>
    </div>
  );
};

export default DarkSwitch;
