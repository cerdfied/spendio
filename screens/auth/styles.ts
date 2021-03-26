import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: "80%",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#eafaff",
    borderRadius: 25,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  smallText: {
    color: "black",
    fontSize: 11,
  },
  errorText: {
    color: "red",
    fontSize: 11,
  },
  button: {
    width: "40%",
    backgroundColor: "black",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
  },
});
