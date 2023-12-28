import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { stylesLogin as styles } from "./styles.login";

export default function Login() {
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

