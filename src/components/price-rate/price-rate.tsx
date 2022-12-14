import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { palette, spacing } from "theme";
import { Text } from "../Text/Text";

interface Props {
  price: number;
  rate: number;
}
export const PriceRateComponent: React.FC<Props> = memo((props) => {
  return (
    <View style={styles.container}>
      <Text
        children={`USD ${props.price}`}
        type={"bold"}
        isTouchable={false}
        color={palette.black}
        fz={12}
      />
      <Text
        children={`${props.rate}/5`}
        type={"bold"}
        isTouchable={false}
        color={palette.black}
        fz={12}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.m,
  },
});
