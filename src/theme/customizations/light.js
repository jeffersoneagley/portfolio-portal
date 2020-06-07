import { createTheme } from "office-ui-fabric-react";

const palette = {
  themePrimary: "#4717f6",
  themeLighterAlt: "#f7f5ff",
  themeLighter: "#e0d8fd",
  themeLight: "#c6b7fc",
  themeTertiary: "#8e71f9",
  themeSecondary: "#5c31f6",
  themeDarkAlt: "#3f14dc",
  themeDark: "#3511ba",
  themeDarker: "#270c89",
  neutralLighterAlt: "#c6ecf8",
  neutralLighter: "#c3e8f4",
  neutralLight: "#bbdeea",
  neutralQuaternaryAlt: "#aecfda",
  neutralQuaternary: "#a6c6d0",
  neutralTertiaryAlt: "#a0bec8",
  neutralTertiary: "#a396cf",
  neutralSecondary: "#5b489f",
  neutralPrimaryAlt: "#2a1772",
  neutralPrimary: "#1b085e",
  neutralDark: "#150648",
  black: "#0f0535",
  white: "#ccf2ff"
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
