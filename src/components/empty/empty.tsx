import React from "react";
import { SafeAreaView } from "react-native";
import { palette } from "theme";

interface Props {
  children: any;
}
export const Empty: React.FC<Props> = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: palette.white,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </SafeAreaView>
  );
};
