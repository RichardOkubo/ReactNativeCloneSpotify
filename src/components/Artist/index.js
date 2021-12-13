import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

export default function Artist({ artist }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{ uri: artist.uri }} style={styles.image} />
        <Text style={styles.text}>{artist.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
