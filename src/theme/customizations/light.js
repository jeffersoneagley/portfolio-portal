import { createTheme } from "office-ui-fabric-react";

const palette = {
  themePrimary: "#dba62a",
  themeLighterAlt: "#fefbf5",
  themeLighter: "#f9f0d9",
  themeLight: "#f4e2b9",
  themeTertiary: "#eac878",
  themeSecondary: "#e0b040",
  themeDarkAlt: "#c59526",
  themeDark: "#a77e20",
  themeDarker: "#7b5d17",
  neutralLighterAlt: "#f3f3f3",
  neutralLighter: "#efefef",
  neutralLight: "#e5e5e5",
  neutralQuaternaryAlt: "#d6d6d6",
  neutralQuaternary: "#cccccc",
  neutralTertiaryAlt: "#c4c4c4",
  neutralTertiary: "#a382bf",
  neutralSecondary: "#8963aa",
  neutralPrimaryAlt: "#714895",
  neutralPrimary: "#260542",
  neutralDark: "#471e6c",
  black: "#350f57",
  white: "#fafafa"
};

const theme = createTheme({
  palette
});

/** @type {import('office-ui-fabric-react').ICustomizations} */
export const lightCustomizations = {
  settings: {
    theme
  }
};
