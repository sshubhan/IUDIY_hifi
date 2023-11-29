import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IUDIY</Text>
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
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "pink",
    marginBottom: 20,
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
});

export default LoginScreen;
