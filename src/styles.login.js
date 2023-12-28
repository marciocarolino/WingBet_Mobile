import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({
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
    backgroundColor: "#8B4513",
    bottom: 20,
    width: "100%",
  },
  ButtonAccess: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    backgroundColor: "#8B4513",
  },
});
