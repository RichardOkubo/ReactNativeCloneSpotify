import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { styles } from "./style";

export default function Options() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="bell" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="progress-clock" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <SimpleLineIcons name="settings" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
