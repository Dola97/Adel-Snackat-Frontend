import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

interface Props {
  styleButton?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  loading: boolean | undefined;
  loadingComponent?: any;
  onPress: () => void;
}
export const Button: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      disabled={props.loading}
      onPress={props.onPress}
      style={props.styleButton}
    >
      {props.loading ? props.loadingComponent : props.children}
    </TouchableOpacity>
  );
};
