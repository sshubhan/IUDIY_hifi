// NewPrescriptionConfirmationScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";
import { usePrescription } from "./PrescriptionContext"; // Make sure this path is correct

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
      <SafeAreaView style={styles.container}>
        <Header title="New Recommendation" />
        <View style={styles.detailContainer}>
          <Text style={styles.confirmationText}>
            Your new recommendation based on your preferences:
          </Text>
          <Text style={styles.detailText}>Preference details here...</Text>
          <TouchableOpacity
            style={styles.logButton}
            onPress={handleSetPrescription}
          >
            <Text style={styles.buttonText}>
              Set as my current prescription
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
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
    width: "100%",
    height: "100%",
  },
});

export default NewPrescriptionConfirmationScreen;
