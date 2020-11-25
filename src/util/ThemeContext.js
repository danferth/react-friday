import React, { useContext, useState } from "react";

//create context for value and updater
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

//hooks for value and update
export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

//export Provider
export function ThemeProvider({ children }) {
  //state for value
  const [darkTheme, setDarkTheme] = useState(false);
  //updater function
  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme);

  //return provider with update in provider as child and children returned
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
