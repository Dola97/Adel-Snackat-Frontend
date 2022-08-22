import React, { memo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { palette, Radios, spacing } from "theme";
import { Text } from "../Text/Text";
interface Props {
  chipName: string | undefined;
  styles: StyleProp<ViewStyle>;
}
export const Chip: React.FC<Props> = memo((props) => {
  return (
    <View
      style={{
        //@ts-ignore
        ...props.styles,
        ...styles.containerChip,
      }}
    >
      <Text
        children={props.chipName}
        type={"bold"}
        isTouchable={false}
        color={palette.white}
        fz={12}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  containerChip: {
    backgroundColor: palette.gray,
    borderRadius: Radios.l,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.s,
  },
});
