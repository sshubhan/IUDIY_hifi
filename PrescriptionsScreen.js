// PrescriptionsScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PrescriptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Prescriptions</Text>
      
      {/* Other components for prescriptions can be added here */}
      
      {/* Button to find prescription locations */}
      <TouchableOpacity
        style={styles.findLocationButton}
        onPress={() => navigation.navigate('PharmacyMapScreen')}>
        <Text style={styles.buttonText}>Where to Find Prescription</Text>
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
    backgroundColor: "white", // Adjust the background color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  findLocationButton: {
    backgroundColor: "#009473", // Adjust the button color as needed
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  // Add other styles as needed
});

export default PrescriptionsScreen;
