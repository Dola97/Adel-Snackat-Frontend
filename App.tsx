import React from "react";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import AppNavigator from "navigations";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <React.Fragment>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar
          barStyle={"dark-content"}
          translucent
          backgroundColor="transparent"
          animated={true}
        />

        <AppNavigator />
      </SafeAreaProvider>
      <Toast topOffset={50} />
    </React.Fragment>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
