import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { palette, RHeight, RWidth, spacing } from "theme";
import { Text } from "components/Text/Text";

interface Props {
  quantity: number;
  PlusQuantity: () => void;
  MinusQuantity: () => void;
}
export const PlusMinus: React.FC<Props> = (props) => {
  return (
    <View style={styles.containerQuantity}>
      <TouchableOpacity
        onPress={props.PlusQuantity}
        style={styles.containerPlusMinus}
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
        style={styles.containerPlusMinus}
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

const styles = StyleSheet.create({
  containerQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "flex-end",
  },
  containerPlusMinus: {
    justifyContent: "center",
    alignItems: "center",
    width: RWidth(30),
    height: RHeight(30),
    backgroundColor: palette.gray,
  },
});
