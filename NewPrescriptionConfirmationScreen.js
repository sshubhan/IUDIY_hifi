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
import { usePrescription } from "./PrescriptionContext";
import Header from "./Header";

const NewPrescriptionConfirmationScreen = ({ navigation }) => {
  const { setPrescription } = usePrescription();

  const handleSetPrescription = () => {
    setPrescription("Slynd");
    navigation.navigate("CurrentRecommendation");
  };

  const handleCancel = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeTabs" }],
    });
  };

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]}
      style={[styles.container, styles.linearGradientStyle]}
    >
      <SafeAreaView style={styles.container}>
        <Header title="New Recommendation" navigation={navigation} />
        <View style={styles.container}>
          <Text style={styles.confirmationText}>
            Your new recommendation based on your preferences:
          </Text>
          <Text style={styles.detailText}>Slynd</Text>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  confirmationText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  detailText: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Inter-Light",
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
    fontFamily: "Inter-Regular",
  },
  linearGradientStyle: {
    width: "100%",
    height: "100%",
  },
});

export default NewPrescriptionConfirmationScreen;
