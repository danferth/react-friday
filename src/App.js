import React from "react";
import Cooper from "./components/Cooper";
import Card from "./components/Card";
import Footer from "./components/Footer";
import DarkSwitch from "./components/DarkBtn";
import { useTheme } from "./util/ThemeContext";
const App = () => {
  const dark = useTheme();
  return (
    <React.Fragment>
      <div className={`${dark ? `dark` : ``} flex flex-col min-h-screen`}>
        <DarkSwitch />
        <div className="flex-grow flex flex-col items-center justify-evenly md:justify-center min-w-full z-10 bg-white dark:bg-gray-800 transition">
          <Cooper />
          <Card />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
