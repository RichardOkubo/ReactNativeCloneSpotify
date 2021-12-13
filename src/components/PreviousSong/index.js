import React from "react";
import { View, Text, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AlbumPrevious from "../AlbumPrevious";
import Options from "../Options";
import fakeData from "../../data/fakeData";

import { styles } from "./style";

export default function PreviousSong({ title, albums }) {
  return (
    <LinearGradient
      colors={["#1ed860", "#121212"]}
      start={{ x: -0.2, y: -0.5 }}
      end={{ x: 0, y: .7 }}
    >
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
    </LinearGradient>
  );
}
