import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import AuthContext from "../../contexts/authContext";

import { styles } from "./style";

export default function Login() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedSenha, setFocusedSenha] = useState(false);

  function handleLogin() {
    signIn(email, senha);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
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
        <TextInput
          secureTextEntry={true}
          style={[
            styles.input,
            {
              backgroundColor: focusedSenha ? "#808080" : "#535353",
            },
          ]}
          onChange={(e) => setSenha(e.nativeEvent.text)}
          value={senha}
          onFocus={() => setFocusedSenha(!focusedSenha)}
          onBlur={() => setFocusedSenha(!focusedSenha)}
          selectionColor="white"
        />
      </View>
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
        <TouchableOpacity style={styles.otherButton} onPress={() => {}}>
          <Text style={styles.textOtherButton}>Entrar sem senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
