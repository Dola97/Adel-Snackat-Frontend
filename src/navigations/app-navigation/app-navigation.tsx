import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen, ProductsScreen } from "screens";
import { AppParamsList } from "../parmas-list";
const AppStack = createNativeStackNavigator<AppParamsList>();

export const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      initialRouteName="products"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="products" component={ProductsScreen} />
      <AppStack.Screen name="cart" component={CartScreen} />
    </AppStack.Navigator>
  );
};
