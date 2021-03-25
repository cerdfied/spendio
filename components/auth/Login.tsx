import React from "react";
import { StyleSheet, View, Button, Image, Text, TextInput } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/full-logo.png")}
      />
      <Text style={styles.slogan}> The simplest budgeting app </Text>
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => console.log("typing")}
            value={""}
            keyboardType="default"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => console.log("typing")}
            value={""}
            keyboardType="default"
          />
        </View>
      </View>
      <Button title="Login" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  slogan: {
    marginTop: 15,
  },
  label: {
    textAlign: "left",
    width: "100%",
  },
  inputWrapper: {
    marginTop: 30,
  },
  inputContainer: {
    width: "100%",
    height: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 20,
    borderWidth: 1,
    width: "100%",
  },
  image: {
    height: 100,
    width: "80%",
  },
});
