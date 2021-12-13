import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import AuthContext from "../../contexts/authContext";

import { styles } from "./style";

export default function Warning({ nameScreen }) {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nameScreen}</Text>
      <Text style={styles.text}>Esta tela não precisa ser implementada</Text>
      <Text style={styles.text}>
        Para efetuar o logout, pressione o botão abaixo
      </Text>
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.textButton}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
