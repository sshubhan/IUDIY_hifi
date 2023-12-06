// NewPrescriptionConfirmationScreen.js
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to have this import if you're using Expo
import { LinearGradient } from "expo-linear-gradient";

const NewPrescriptionConfirmationScreen = ({ route, navigation }) => {
  const { preferences } = route.params || {};

  // Handle setting the new prescription here
  const handleSetPrescription = () => {
    // Logic to set the new prescription...
    navigation.navigate("HomeTabs");
  };

  // Handle the cancel action
  const handleCancel = () => {
    navigation.navigate("HomeTabs");
  };

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <View style={styles.container}>
        <Text style={styles.confirmationText}>
          Your new recommendation based on your preferences:
        </Text>
        {/* Display the preferences in a more detailed manner here */}
        {/* For now, let's display a simple text */}
        <Text style={styles.detailText}>Preference details here...</Text>
        <TouchableOpacity
          style={styles.logButton}
          onPress={handleSetPrescription}
        >
          <Text style={styles.buttonText}>Set as my current prescription</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
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
  confirmationText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  logButton: {
    backgroundColor: "#009473",
    width: 300,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  // Add other styles as necessary
});

export default NewPrescriptionConfirmationScreen;
