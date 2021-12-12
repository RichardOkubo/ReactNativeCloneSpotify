import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";

import Options from "../../components/Options";
import AlbumCategory from "../../components/AlbumCategory";
import albumCategories from "../../data/albumCategories";
import PreviousSong from "../../components/PreviousSong";

import { styles } from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
      <Options />
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
