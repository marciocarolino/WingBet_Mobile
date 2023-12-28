import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFaceBook = () => {
    console.log("Botao do FaceBook");
  };

  const handleGooel = () => {
    console.log("Botao Googgle");
  };

  const handleAcessar = () => {
    console.log(`Usuário.: ${userName}`);
  };

  return (
    <View style={styles.container}>
      <Text>Criando Projeto WingBet</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome de usuário"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <View>
        <Button
          style={styles.ButtonFacebook}
          title="FACEBOOK"
          onPress={handleFaceBook}
          color="#40E0D0"
        />
        <Button
          style={styles.ButtonGoogle}
          title="GOOGLE"
          onPress={handleFaceBook}
          color="#4682B4"
        />
      </View>

      <View style={styles.ButtonAccess}>
        <Button title="ACESSAR" onPress={handleAcessar} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: "100%",
  },
  ButtonFacebook: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  ButtonGoogle: {
    position: "absolute",
    backgroundColor: "#40E0D0",
    bottom: 20,
    width: "100%",
  },
  ButtonAccess: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
});
