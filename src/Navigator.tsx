import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// Import screens under here
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/HomeScreen";

// This defines how your app navigates from screen to screen
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen
});

export default createAppContainer(AppNavigator);
