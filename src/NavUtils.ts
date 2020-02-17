import { StackNavigationProp } from "@react-navigation/stack";

export enum NavRoute {
  Home = "Home",
  List = "List"
}

export type MainStackParamList = {
  [NavRoute.Home]: undefined;
  [NavRoute.List]: undefined;
};

export type NavigationScreenProp<T extends NavRoute> = StackNavigationProp<
  MainStackParamList,
  T
>;
