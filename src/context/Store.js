"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        sidebarExpanded,
        setSidebarExpanded,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const myContext = () => useContext(ThemeContext);
