import React from "react";
import {
  ColorValue,
  StyleProp,
  Text as RNText,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { fonts, height } from "theme";

export interface TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  type: "bold" | "reg" | "thin" | "italic" | "black" | "light" | "semi";
  isTouchable: boolean;
  textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  pressText?: () => void;
  color: ColorValue | undefined;
  fz: number | any;
  Touchstyle?: StyleProp<ViewStyle>;
}

export const Text = ({
  children,
  style,
  pressText,
  Touchstyle,
  color,
  type,
  isTouchable,
  textAlign,
  fz,
  ...rest
}: TextProps) => (
  <TouchableOpacity
    style={Touchstyle}
    disabled={isTouchable ? false : true}
    onPress={pressText}
  >
    <RNText
      {...rest}
      style={{
        //@ts-ignore
        ...style,
        fontSize: RFValue(fz, height),
        color: color,
        textAlign: textAlign,
        fontFamily:
          type === "bold"
            ? fonts.Bold
            : type === "reg"
            ? fonts.Reg
            : type === "light"
            ? fonts.Light
            : type === "black" && fonts.Black,
      }}
    >
      {children}
    </RNText>
  </TouchableOpacity>
);
