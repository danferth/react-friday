import React from "react";
import Card from "./components/card";
import DarkSwitch from "./components/darkBtn";
import { useTheme } from "./util/ThemeContext";
const App = () => {
  const dark = useTheme();
  return (
    <div className={dark ? `dark` : ``}>
      <DarkSwitch />
      <div className="min-w-full min-h-screen flex pt-48 justify-center z-10 bg-white dark:bg-gray-800 transition">
        <Card />
      </div>
    </div>
  );
};

export default App;
