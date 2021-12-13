import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ presentation: "modal" }}>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          title: "",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#121212",
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </AuthStack.Navigator>
  );
}
