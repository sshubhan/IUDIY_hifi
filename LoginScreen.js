import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

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
      <Button
        title="Sign Up"
        onPress={() => {
          /* Sign Up logic */
        }}
      />
      <Button title="Log In" onPress={() => navigation.navigate("HomeTabs")} />
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
});

export default LoginScreen;
