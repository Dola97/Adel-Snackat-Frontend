import React, { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";
import { borders, palette, Radios, RHeight, RWidth, spacing } from "theme";
import { RemoveItem } from "../remove-item/remove-item";
import { PlusMinus } from "../plus-minus/plus-minus";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "src/store/cart-slice";
interface Props {
  id: number;
  image: any;
  quantity: number;
}
export const CartCard: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const _handleDelete = useCallback(() => {
    dispatch(removeFromCart(props.id));
  }, [props.id, dispatch]);
  const _incrementDecrement = useCallback(
    (type: string) => {
      type == "inc"
        ? dispatch(incrementQuantity(props.id))
        : dispatch(decrementQuantity(props.id));
    },
    [props.id, dispatch]
  );

  return (
    <View style={styles.container}>
      <RemoveItem
        deletePress={_handleDelete}
        deleteContainerStyle={styles.deleteContainerStyle}
      />
      <Image
        source={{ uri: props.image }}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="contain"
      />
      <PlusMinus
        quantity={props.quantity}
        PlusQuantity={() => _incrementDecrement("inc")}
        MinusQuantity={() => _incrementDecrement("dec")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderColor: palette.gray,
    borderWidth: borders.thick,
    borderRadius: Radios.m,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.m,
    margin: spacing.l,
  },
  deleteContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.gray,
    borderRadius: Radios.s,
    position: "absolute",
    right: spacing.m,
    top: spacing.m,
  },

  image: {
    width: RWidth(90),
    height: RHeight(90),

    backgroundColor: "transparent",
  },
});
