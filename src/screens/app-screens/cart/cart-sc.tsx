import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { palette } from "theme";
import { CartCard, Empty, Text } from "components";
import { selectCart } from "src/store/cart-slice";
import { useSelector } from "react-redux";
export const CartScreen = () => {
  const cart = useSelector(selectCart);
  if (cart.length === 0) {
    return (
      <Empty
        children={
          <Text
            children="Your Cart Is Empty"
            type={"bold"}
            isTouchable={false}
            color={palette.black}
            fz={24}
          />
        }
      />
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: palette.white, flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {cart.map((item, key) => (
          <React.Fragment key={`line_items_keys_${key}`}>
            <CartCard
              id={item.id}
              quantity={item.quantity}
              image={item.image}
            />
          </React.Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
