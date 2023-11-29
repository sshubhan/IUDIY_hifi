// screens/HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.reminderText}>Take Yasmin in 34 minutes</Text>
      <Button
        title="Log Your Symptoms"
        // onPress={() => navigation.navigate("Log Your Symptoms")}
        onPress={() => navigation.navigate("Symptom Check")}
      />
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
  reminderText: {
    fontSize: 20,
    color: "red",
    marginBottom: 20,
  },
});

export default HomeScreen;
