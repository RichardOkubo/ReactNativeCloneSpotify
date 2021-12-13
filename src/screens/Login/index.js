import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-root-toast";

import AuthContext from "../../contexts/authContext";

import { styles } from "./style";

export default function Login() {
  const { signIn, correctData } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    signIn(email, senha);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.inputGroup, { marginBottom: 40 }]}>
        <Text style={styles.textInput}>E-mail ou nome de usuário</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: focusedEmail ? "#808080" : "#535353",
            },
          ]}
          onChange={(e) => setEmail(e.nativeEvent.text)}
          value={email}
          onFocus={() => setFocusedEmail(!focusedEmail)}
          onBlur={() => setFocusedEmail(!focusedEmail)}
          selectionColor="white"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textInput}>Senha</Text>
        <View style={styles.inputWithEye}>
          <TextInput
            secureTextEntry={!showPassword}
            style={[
              styles.input,
              {
                flex: 1,
                backgroundColor: focusedPassword ? "#808080" : "#535353",
              },
            ]}
            onChange={(e) => setSenha(e.nativeEvent.text)}
            value={senha}
            onFocus={() => setFocusedPassword(!focusedPassword)}
            onBlur={() => setFocusedPassword(!focusedPassword)}
            selectionColor="white"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              style={[
                styles.icon,
                { backgroundColor: focusedPassword ? "#808080" : "#535353" },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.info, {color: correctData ? "transparent" : "white"}]}>
        O e-mail ou senha inseridos estão incorretos.
      </Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                senha.length && email.length ? "white" : "#656565",
            },
          ]}
          onPress={handleLogin}
          disabled={senha.length > 0 && email.length > 0 ? false : true}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.otherButton}
          onPress={() =>
            Toast.show("Funcionalidade indisponível", {
              backgroundColor: "white",
              textColor: "black",
            })
          }
        >
          <Text style={styles.textOtherButton}>Entrar sem senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
