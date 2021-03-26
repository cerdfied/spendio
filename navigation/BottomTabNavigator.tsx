import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabParamList,
  HomeParamList,
  SettingsParamList,
} from "../types/types";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "black",
        showLabel: false,
        style: {
          backgroundColor: "white",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="home-outline" color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="settings-helper" color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  const style =
    props.name === "home-outline"
      ? { marginBottom: -15, marginRight: 30 }
      : { marginBottom: 10, marginLeft: 30 };
  console.log(props);
  return <MaterialCommunityIcons size={30} style={style} {...props} />;
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "" }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: "" }}
      />
    </SettingsStack.Navigator>
  );
}
