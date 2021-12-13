import React from "react";
import { View, Text, FlatList } from "react-native";

import AlbumPrevious from "../AlbumPrevious";
import Options from "../Options";
import fakeData from "../../data/fakeData";

import { styles } from "./style";

export default function PreviousSong({ title, albums }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Options />
      </View>
      <FlatList
        data={albums}
        renderItem={({ item }) => <AlbumPrevious album={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
