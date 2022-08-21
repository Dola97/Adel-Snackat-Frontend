import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const palette = {
  black: "#0B0B0B",
  white: "#F0F2F3",
  primary: "#ffff",
  secondary: "#0B0B0B",
  warning: "#ffcc00",
  success: "#42ba96",
  error: " #cc0000",
  gray: "#808080",
};

export const spacing = {
  xs: 4,
  s: 6,
  m: 8,
  l: 16,
  lg: 32,
  xl: 64,
};
export const borders = {
  thin: 1,
  thick: 3,
};

export const fontSizes = {};

export const RWidth = (w: any) => {
  return (Dimensions.get("window").width * w) / 376;
};

export const RHeight = (h: any) => {
  return (Dimensions.get("window").height * h) / 812;
};

export { width, height };
