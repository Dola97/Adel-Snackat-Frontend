import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen, ProductsScreen } from "screens";
import { AppParamsList } from "../parmas-list";
import { fonts, palette } from "theme";
import { Text } from "react-native";
import { Cart } from "assets/svgs";
const AppStack = createNativeStackNavigator<AppParamsList>();

export const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      initialRouteName="products"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: palette.primary,
        },
        headerTintColor: palette.secondary,
        headerTitleStyle: {
          fontFamily: fonts.Bold,
          fontSize: 24,
        },
        // headerRight: () => <Cart />,
      }}
    >
      <AppStack.Screen name="products" component={ProductsScreen} />
      <AppStack.Screen name="cart" component={CartScreen} />
    </AppStack.Navigator>
  );
};
