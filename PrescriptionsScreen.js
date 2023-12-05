// PrescriptionsScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PrescriptionsScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Your Prescriptions</Text>

        {/* Button to find prescription locations */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PharmacyMapScreen")}
        >
          <Text style={styles.buttonText}>Where to Find Prescription</Text>
        </TouchableOpacity>

        {/* Button to get a new recommendation */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RecommendationPreferences")}
        >
          <Text style={styles.buttonText}>Get a New Recommendation</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
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
    width: "80%", // Adjust the width as needed
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center", // Ensure the text is centered
  },
});

export default PrescriptionsScreen;
