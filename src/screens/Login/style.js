import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    paddingTop: 5,
  },
  arrow: {
    marginLeft: 14,
    marginBottom: 24,
  },
  inputGroup: {
    marginHorizontal: 14,
  },
  textInput: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#535353",
    paddingVertical: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingStart: 10,
    paddingEnd: 5,
    color: "white",
  },
  inputWithEye: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "white",
    backgroundColor: "#535353",
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  info: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 14,
    fontSize: 16.5,
  },
  buttonGroup: {
    alignItems: "center",
  },
  textButton: {
    color: "#505050",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: "#656565",
  },
  textOtherButton: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  otherButton: {
    backgroundColor: "#121212",
    borderColor: "#535353",
    borderWidth: 2,
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 25,
  },
});
