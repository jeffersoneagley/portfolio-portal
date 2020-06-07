import { createTheme } from "office-ui-fabric-react";

const palette = {
  themePrimary: "#8b6ef5",
  themeLighterAlt: "#06040a",
  themeLighter: "#161227",
  themeLight: "#2a2149",
  themeTertiary: "#544293",
  themeSecondary: "#7b61d7",
  themeDarkAlt: "#977cf6",
  themeDark: "#a690f7",
  themeDarker: "#bdadf9",
  neutralLighterAlt: "#1f0d63",
  neutralLighter: "#241169",
  neutralLight: "#2d1a73",
  neutralQuaternaryAlt: "#331f7a",
  neutralQuaternary: "#38247f",
  neutralTertiaryAlt: "#503d95",
  neutralTertiary: "#ddf6ff",
  neutralSecondary: "#e2f8ff",
  neutralPrimaryAlt: "#e8f9ff",
  neutralPrimary: "#ccf2ff",
  neutralDark: "#f3fcff",
  black: "#f9fdff",
  white: "#1a085c"
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
