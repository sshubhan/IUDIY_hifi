import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../IUDIY_hifi/logo.png")} />
      </View>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.description}>
        IUDIY will help you find a personalized contraceptive method and allow
        you to track your daily menstrual symptoms.
      </Text>
      {/* <TouchableOpacity
        style={styles.logButton}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.logButton}
        onPress={() => navigation.navigate("HomeTabs")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    justifyContent: "center",
    margin: 15,
  },
  title: {
    fontSize: 56,
    fontWeight: "bold",
    fontFamily: "",
    color: "#009473",
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 400,
    height: 150,
    marginRight: 15,
    borderRadius: 5,
  },
  logButton: {
    backgroundColor: "#009473",
    width: 300,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default LoginScreen;
