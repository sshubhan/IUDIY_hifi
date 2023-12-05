// NewPrescriptionConfirmationScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { usePrescription } from './PrescriptionContext'; // Adjust the path to where your context is located

const NewPrescriptionConfirmationScreen = ({ navigation }) => {
  const { setPrescription } = usePrescription();

  const handleSetPrescription = () => {
    setPrescription("Slynd");
    navigation.navigate("CurrentRecommendationScreen");
  };

  const handleCancel = () => {
    navigation.navigate("HomeTabs");
  };

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]}
      style={styles.linearGradientStyle}
    >
      <View style={styles.container}>
        <Text style={styles.confirmationText}>
          Your new recommendation based on your preferences:
        </Text>
        {/* Display the preferences here if needed */}
        <TouchableOpacity style={styles.button} onPress={handleSetPrescription}>
          <Text style={styles.buttonText}>Set as my current prescription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradientStyle: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  confirmationText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#009473",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  // ... other styles as needed
});

export default NewPrescriptionConfirmationScreen;
