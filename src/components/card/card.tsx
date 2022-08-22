import React, { memo, useCallback } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  StyleProp,
  ImageStyle,
  View,
} from "react-native";
import { borders, palette, Radios, RHeight, RWidth, spacing } from "theme";
import { Chip } from "../chip/chip";
import { Text } from "../Text/Text";
import { AddCartButton } from "../add-to-cart-button/add-to-cart-button";
import { PriceRateComponent } from "../price-rate/price-rate";
interface Props {
  img: any;
  imgStyle?: StyleProp<ImageStyle>;
  categoryName: string | undefined;
  title: string | undefined;
  index: any;
  price: number;
  rate: number;
  addToCart: () => void;
}
export const Card: React.FC<Props> = memo((props) => {
  return (
    <TouchableOpacity
      onLongPress={() => console.log("dskds")}
      key={props.index}
      style={styles.container}
    >
      <Chip chipName={props.categoryName} styles={{ alignSelf: "flex-end" }} />
      <Image
        source={{ uri: props.img }}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="contain"
      />
      <Text
        children={`${props.title?.substring(0, 30)} ...`}
        type={"bold"}
        isTouchable={false}
        textAlign="left"
        style={{ marginTop: spacing.m }}
        color={palette.secondary}
        fz={14}
      />
      <PriceRateComponent price={props.price} rate={props.rate} />
      <AddCartButton onPress={props.addToCart} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderColor: palette.gray,
    borderWidth: borders.thick,
    borderRadius: Radios.l,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.m,
    margin: spacing.s,
    width: RWidth(170),
  },
  image: {
    width: RWidth(80),
    height: RHeight(80),
    backgroundColor: "transparent",
    alignSelf: "center",
    marginTop: spacing.l,
  },
});
