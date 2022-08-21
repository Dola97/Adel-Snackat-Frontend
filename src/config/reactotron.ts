import Reactotron from "reactotron-react-native";
import { NativeModules } from "react-native";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({
  name: "TestAA",
})
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
  })
  .use(reactotronRedux())
  .connect();

export default Reactotron;
