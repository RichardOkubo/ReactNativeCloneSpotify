import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#121212",
    flex: 1,
  },
  text: {
    color: "white",
  },
});
