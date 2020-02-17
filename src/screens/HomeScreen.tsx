import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationScreenProp, NavRoute } from "../NavUtils";

// This defines what kind of props the screen accepts
// Since we navigate to it via react-navigation it only gets a navigation prop
interface IProps {
  navigation: NavigationScreenProp<NavRoute.Home>;
}

export default class HomeScreen extends React.Component<IProps> {
  // This tells react what to render on the screen. Every component needs a render function
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="Go To ListScreen" onPress={this.onPressButton} />
      </View>
    );
  }

  // This is a function that will navigate you to the ListScreen
  private onPressButton = () => {
    this.props.navigation.navigate(NavRoute.List);
  };
}
