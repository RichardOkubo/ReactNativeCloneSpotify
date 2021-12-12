import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
//import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";

const AuthStack = createStackNavigator();
//const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ presentation: 'modal', }}>
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
