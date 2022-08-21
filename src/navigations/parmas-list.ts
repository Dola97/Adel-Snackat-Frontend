import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppParamsList = {
  products: undefined;
  cart: undefined;
  splash: undefined;
};

export type appNavigationProps<T extends keyof AppParamsList> = {
  navigation: NativeStackNavigationProp<AppParamsList, T>;
};

export type PrimaryParamList = AppParamsList;
export type PrimaryParamListKeys = keyof PrimaryParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PrimaryParamList {}
  }
}
