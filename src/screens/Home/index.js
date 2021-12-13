import React, { useMemo } from "react";
import { View, FlatList } from "react-native";

import Items from "./items";

import { styles } from "./style";

export default function Home() {
  const data = useMemo(() => Items, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => item.render()}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
