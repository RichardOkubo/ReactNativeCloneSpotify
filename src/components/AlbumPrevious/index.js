import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

export default function AlbumPrevious({ album }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{ uri: album.uri }} style={styles.image} />
        <Text style={styles.text}>{album.bands}</Text>
      </View>
    </TouchableOpacity>
  );
}
