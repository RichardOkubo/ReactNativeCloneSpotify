import React from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./style";
import Album from "../Album";

export default function AlbumCategory({ title, albums }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
