import React from "react";
import Cooper from "./components/Cooper";
import Card from "./components/Card";
import { AnimateSharedLayout } from "framer-motion";
import Footer from "./components/Footer";
const App = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen max-h-screen">
        <AnimateSharedLayout>
          <div
            layout="true"
            className="flex-grow flex flex-col items-center justify-evenly md:justify-center lg:flex-row lg:px-20 min-w-full z-10 bg-white dark:bg-gray-800 transition"
          >
            <Cooper />
            <Card />
          </div>
        </AnimateSharedLayout>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
