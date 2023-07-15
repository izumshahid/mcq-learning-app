"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("none");

  return (
    <ThemeContext.Provider
      value={{
        activeNav,
        setActiveNav,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const myContext = () => useContext(ThemeContext);
