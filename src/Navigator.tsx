import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp
} from "@react-navigation/stack";
// Import screens under here
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import { MainStackParamList, NavRoute } from "./NavUtils";

// This defines how your app navigates from screen to screen
const MainStack = createStackNavigator<MainStackParamList>();

export function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name={NavRoute.Home} component={HomeScreen} />
        <MainStack.Screen name={NavRoute.List} component={ListScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
