import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from 'react-native-root-siblings';
//import EStyleSheet from 'react-native-extended-stylesheet';

import Routes from "./src/routes";
import { AuthProvider } from "./src/contexts/authContext"

//EStyleSheet.build();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <AuthProvider>
        <RootSiblingParent> 
          <Routes />
        </RootSiblingParent> 
      </AuthProvider>
    </NavigationContainer>
  );
}
