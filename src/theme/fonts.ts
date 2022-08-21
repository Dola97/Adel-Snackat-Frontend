import { Platform } from "react-native";

export const fonts = {
  Bold: Platform.OS === "ios" ? "Lato-Bold" : "Lato-Bold",
  Light: Platform.OS === "ios" ? "Lato-Light" : "Lato-Light",
  Black: Platform.OS === "ios" ? "Lato-Black" : "Lato-Black",
  Reg: Platform.OS === "ios" ? "Lato-Regular" : "Lato-Regular",
  Thin: Platform.OS === "ios" ? "Lato-Thin" : "Lato-Thin",
};
