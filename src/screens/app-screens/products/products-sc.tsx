import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { palette } from "theme";
import { ProductsList } from "./components/list";
import useFetch from "hooks/useFetch";
import { Cart } from "assets/svgs";
import { useNavigation } from "@react-navigation/native";
export const ProductsScreen = ({ navigation }: any) => {
  const { data, loading, status, error } = useFetch("/products");
  const { navigate } = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigate("cart")}>
          <Cart />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  if (error) {
    console.warn("error");
  }

  return (
    <SafeAreaView style={{ backgroundColor: palette.white, flex: 1 }}>
      <ProductsList
        data={data}
        onRefresh={() => console.log("refresh")}
        endReached={() => console.log("refresh")}
        refreshing={loading}
      />
    </SafeAreaView>
  );
};
