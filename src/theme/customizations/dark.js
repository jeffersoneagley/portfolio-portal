import { createTheme } from "office-ui-fabric-react";

const palette = {
  themePrimary: "#e1ac2f",
  themeLighterAlt: "#fefbf6",
  themeLighter: "#faf1da",
  themeLight: "#f6e4bc",
  themeTertiary: "#edcb7c",
  themeSecondary: "#e4b546",
  themeDarkAlt: "#ca9a2a",
  themeDark: "#ab8224",
  themeDarker: "#7e601a",
  neutralLighterAlt: "#330659",
  neutralLighter: "#320658",
  neutralLight: "#300654",
  neutralQuaternaryAlt: "#2c054e",
  neutralQuaternary: "#2a054b",
  neutralTertiaryAlt: "#290548",
  neutralTertiary: "#ececec",
  neutralSecondary: "#d9d9d9",
  neutralPrimaryAlt: "#c7c7c7",
  neutralPrimary: "#c0c0c0",
  neutralDark: "#919191",
  black: "#6b6b6b",
  white: "#34065c"
};

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
