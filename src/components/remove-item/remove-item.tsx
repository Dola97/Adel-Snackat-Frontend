import React, { memo } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { Delete } from "assets/svgs";
interface Props {
  deleteContainerStyle: StyleProp<ViewStyle>;
  deletePress: () => void;
}
export const RemoveItem: React.FC<Props> = memo((props) => {
  return (
    <TouchableOpacity
      onPress={props.deletePress}
      style={props.deleteContainerStyle}
    >
      <Delete />
    </TouchableOpacity>
  );
});
