import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { MyTabBar } from "../components/TabBar";
import { Favorites } from "../screens/Favorites/SignIn";
import { Cart } from "../screens/Cart/SignIn";
import { User } from "../screens/User/SignIn";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

export function AuthRoutes() {
  function StackScreens() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Sign" component={SignIn} />
      </Stack.Navigator>
    );
  }

  return (
    <Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Screen name="home" component={StackScreens} />
      <Screen name="hearto" component={Favorites} />
      <Screen name="user" component={User} />
      <Screen name="shoppingcart" component={Cart} />
    </Navigator>
  );
}
