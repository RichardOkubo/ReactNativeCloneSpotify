import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  EvilIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Library from "../screens/Library";
import Premium from "../screens/Premium";

const AppStack = createStackNavigator();
const AppBottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <AppBottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <AppBottomTab.Screen
        name="Início"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={25}
              style={{ marginBottom: -10 }}
              color={color}
            />
          ),
        }}
      />
      <AppBottomTab.Screen
        name="Buscar"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <EvilIcons
              name="search"
              size={25}
              style={{ marginBottom: -10 }}
              color={color}
            />
          ),
        }}
      />
      <AppBottomTab.Screen
        name="Sua Biblioteca"
        component={Library}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="md-library"
              size={25}
              style={{ marginBottom: -10 }}
              color={color}
            />
          ),
        }}
      />
      <AppBottomTab.Screen
        name="Premium"
        component={Premium}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="spotify"
              size={25}
              style={{ marginBottom: -10 }}
              color={color}
            />
          ),
        }}
      />
    </AppBottomTab.Navigator>
  );
}

export default function AppRoutes() {
  //<AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="HomeBottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
}
