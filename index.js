import React from "react";
import { Navigation } from "react-native-navigation";
import registerScreens from "@config/navigation/registerScreens";
import { Auth, defaultConfig } from "@config/navigation/behaviors";
import * as screenNames from "./src/config/navigation/screenNames";
registerScreens();

console.disableYellowBox = true;
function App() {
  return Navigation.events().registerAppLaunchedListener(async () => {
    await defaultConfig();
    Auth();
  });
}

App();
