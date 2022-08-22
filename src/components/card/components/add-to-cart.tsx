import React, { memo } from "react";
import { palette, Radios, spacing } from "theme";
import { Button } from "../../button/button";
import { Text } from "../../Text/Text";
interface Props {
  onPress: any;
}
export const AddCartButton: React.FC<Props> = memo((props) => {
  console.log("cart button render");
  return (
    <Button
      onPress={props.onPress}
      styleButton={{
        backgroundColor: palette.black,
        borderRadius: Radios.s,
        alignSelf: "flex-end",
        padding: spacing.m,
        marginTop: spacing.l,
      }}
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
