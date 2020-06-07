import { createTheme } from "office-ui-fabric-react";

const palette = {};

const theme = createTheme({
  isInverted: true,
  palette
});

/** @type {import('office-ui-fabric-react').ICustomizations} */
export const darkCustomizations = {
  settings: {
    theme
  }
};
