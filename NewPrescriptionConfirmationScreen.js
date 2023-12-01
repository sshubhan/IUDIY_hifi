// NewPrescriptionConfirmationScreen.js
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to have this import if you're using Expo

const NewPrescriptionConfirmationScreen = ({ route, navigation }) => {
  const { preferences } = route.params || {};

  // Handle setting the new prescription here
  const handleSetPrescription = () => {
    // Logic to set the new prescription...
    navigation.navigate('HomeTabs');
  };

  // Handle the cancel action
  const handleCancel = () => {
    navigation.navigate('HomeTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.confirmationText}>
        Your new recommendation based on your preferences:
      </Text>
      {/* Display the preferences in a more detailed manner here */}
      {/* For now, let's display a simple text */}
      <Text style={styles.detailText}>Preference details here...</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Set as my current prescription"
          onPress={handleSetPrescription}
          color="#009473"
        />
        <Button
          title="Cancel"
          onPress={handleCancel}
          color="red"
        />
      </View>
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
  // Add other styles as necessary
});

export default NewPrescriptionConfirmationScreen;
