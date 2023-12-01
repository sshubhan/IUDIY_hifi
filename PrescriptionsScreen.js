import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const PrescriptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Existing UI elements */}
      <Text style={styles.title}>Your Prescriptions</Text>

      {/* Button to get a new recommendation */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RecommendationPreferences")}
      >
        <Text style={styles.buttonText}>Get a New Recommendation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#009473",
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default PrescriptionsScreen;
