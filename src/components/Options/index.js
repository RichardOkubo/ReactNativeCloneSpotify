import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Toast from "react-native-root-toast";

import { styles } from "./style";

export default function Options() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          Toast.show("Funcionalidade indisponível", {
            backgroundColor: "white",
            textColor: "black",
          })
        }
      >
        <Feather name="bell" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Toast.show("Funcionalidade indisponível", {
            backgroundColor: "white",
            textColor: "black",
          })
        }
      >
        <MaterialCommunityIcons name="progress-clock" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Toast.show("Funcionalidade indisponível", {
            backgroundColor: "white",
            textColor: "black",
          })
        }
      >
        <SimpleLineIcons name="settings" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
