import React from "react";
import { View, Text, FlatList } from "react-native";

import Album from "../Album";
import albumCategoryFake from "./fakeData"

import { styles } from "./style";

export default function PreviousSong() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{albumCategoryFake.title}</Text>
      <FlatList
        data={albumCategoryFake.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
