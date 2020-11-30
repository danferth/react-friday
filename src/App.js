import React from "react";
import Cooper from "./components/Cooper";
import Card from "./components/card";
import Footer from "./components/Footer";
import DarkSwitch from "./components/DarkBtn";
import { useTheme } from "./util/ThemeContext";
const App = () => {
  const dark = useTheme();
  return (
    <React.Fragment>
      <div className={dark ? `dark` : ``}>
        <DarkSwitch />
        <div className="min-w-full min-h-screen z-10 bg-white dark:bg-gray-800 transition">
          <Cooper />
          <Card />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
