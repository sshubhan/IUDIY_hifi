import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../IUDIY_hifi/logo.png")} />
      </View>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.description}>
        IUDIY will help you find a personalized contraceptive method and allow
        you to track your daily menstrual symptoms.
      </Text>
      <TouchableOpacity
        style={styles.logButton}
        onPress={() => navigation.navigate("HomeTabs")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </LinearGradient>
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
    fontFamily: "Inter-Light",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Inter-Regular",
  },
  logo: {
    width: windowWidth * 0.87,
    height: windowHeight * 0.17,
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
    fontFamily: "Inter-Regular",
  },
});

export default LoginScreen;
