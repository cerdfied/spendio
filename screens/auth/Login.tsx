import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/full-logo.png")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => "set"}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => "set"}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.smallText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.smallText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}
