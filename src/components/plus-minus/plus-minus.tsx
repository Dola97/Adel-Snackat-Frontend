import { Minus, Plus } from "assets/svgs";
import { Text } from "components/Text/Text";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { palette, RHeight, RWidth, spacing } from "theme";
interface Props {
  quantity: number;
  PlusQuantity: () => void;
  MinusQuantity: () => void;
}
export const PlusMinus: React.FC<Props> = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "flex-end",
      }}
    >
      <TouchableOpacity
        onPress={props.PlusQuantity}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: RWidth(30),
          height: RHeight(30),
          backgroundColor: palette.gray,
        }}
      >
        <Text
          children="+"
          type={"bold"}
          isTouchable={false}
          color={palette.white}
          fz={20}
        />
      </TouchableOpacity>
      <Text
        children={props.quantity}
        type={"bold"}
        style={{ marginHorizontal: spacing.m }}
        isTouchable={false}
        color={palette.black}
        fz={14}
      />
      <TouchableOpacity
        onPress={props.MinusQuantity}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: RWidth(30),
          height: RHeight(30),
          backgroundColor: palette.gray,
        }}
      >
        <Text
          children="-"
          type={"bold"}
          isTouchable={false}
          color={palette.white}
          fz={20}
        />
      </TouchableOpacity>
    </View>
  );
};
