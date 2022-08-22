import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { palette, Radios, spacing } from "theme";
import { Button } from "../button/button";
import { Text } from "../Text/Text";
interface Props {
  onPress: () => void;
}
export const AddCartButton: React.FC<Props> = memo((props) => {
  return (
    <Button
      onPress={props.onPress}
      styleButton={styles.button}
      children={
        <Text
          children="Add To Cart"
          type={"bold"}
          isTouchable={false}
          color={palette.white}
          fz={12}
        />
      }
      loading={false}
    />
  );
});
const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.black,
    borderRadius: Radios.s,
    alignSelf: "flex-end",
    padding: spacing.m,
    marginTop: spacing.l,
  },
});
