import React, { createContext } from "react";
import { Fabric } from "office-ui-fabric-react";
import { ThemeProvider } from "./theme/themeContext";

const dataContext = createContext();

export const DataProvider = ({ children }) => {
  return (
    <dataContext.Provider>
      <ThemeProvider>
        <Fabric>{children}</Fabric>
      </ThemeProvider>
    </dataContext.Provider>
  );
};
