// NewPrescriptionConfirmationScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { usePrescription } from './PrescriptionContext'; // Make sure this path is correct

const NewPrescriptionConfirmationScreen = ({ navigation }) => {
  const { setPrescription } = usePrescription();

  const handleSetPrescription = () => {
    setPrescription("Slynd");
    navigation.navigate("HomeTabs"); // Navigate to HomeTabs which includes HomeScreen
  };

  const handleCancel = () => {
    navigation.navigate("HomeTabs");
  };

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]}
      style={[styles.container, styles.linearGradientStyle]}
    >
      <View style={styles.container}>
        <Text style={styles.confirmationText}>
          Your new recommendation based on your preferences:
        </Text>
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
  linearGradientStyle: {
    width: '100%',
    height: '100%',
  },
});

export default NewPrescriptionConfirmationScreen;
