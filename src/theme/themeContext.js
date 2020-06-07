import React, { createContext, useContext, useState } from "react";
import { darkCustomizations, lightCustomizations } from "./customizations";
import { Customizer } from "@fluentui/react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const osDarkModePreferred =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(osDarkModePreferred);
  const customizations = isDarkMode ? darkCustomizations : lightCustomizations;
  const changeTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <themeContext.Provider value={{ isDarkMode, changeTheme }}>
      <Customizer
        settings={customizations?.settings}
        scopedSettings={customizations?.scopedSettings}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "auto",
            background:
              customizations.settings.theme?.semanticColors?.bodyBackground,
            color: customizations.settings.theme?.semanticColors?.bodyText
          }}
        >
          {children}
        </div>
      </Customizer>
    </themeContext.Provider>
  );
};

/** Hook that returns a function that toggles dark mode on or off
 *
 * @type {()=>ThemeData}
 */
export const useThemeData = () => {
  const ctx = useContext(themeContext);
  if (ctx === undefined) {
    throw new Error("useThemeData must be used within a ThemeProvider");
  }
  return ctx;
};

/**
 * @typedef ThemeData
 * @property {()=>void} [changeTheme]
 * @property {boolean} [isDarkMode]
 */
