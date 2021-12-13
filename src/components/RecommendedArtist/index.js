import React from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./style";
import Artist from "../Artist";

export default function RecommendedArtist({ title, artists }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={artists}
        renderItem={({ item }) => <Artist artist={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
