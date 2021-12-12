import React, { useContext } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpeg")}
        resizeMode="stretch"
        style={styles.image}
      >
        <LinearGradient
          colors={["transparent", "black"]}
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <Entypo name="spotify" size={24} color="white" style={styles.icon} />
        </LinearGradient>
      </ImageBackground>

      <View style={styles.logoGroup}>
        <Text style={styles.text}>Milhões de músicas à sua escolha.</Text>
        <Text style={styles.text}>Grátis no Spotify.</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.otherButton}>
          <Text style={styles.textOtherButton}>Inscreva-se grátis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
            Continuar com um número de telefon
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Continuar com o Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Continuar com o Facebook</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.push("Login")}
      >
        <Text style={styles.textRegister}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
