import { StyleSheet, StatusBar } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    width: "auto",
    marginHorizontal: 14,
    marginBottom: 0,
  },
  logoGroup: {
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonGroup: {
    backgroundColor: "#121212",
    marginHorizontal: 40
  },
  otherButton: {
    marginTop: 65,
    backgroundColor: "#1ed860",
    paddingHorizontal: 32,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 2,
  },
  textOtherButton: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#121212",
    borderColor: "#535353",
    borderWidth: 2,
    paddingHorizontal: 32,
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 2,
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  register: {
    alignItems: "center",
    marginTop: 15,
  },
  textRegister: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  }
});
