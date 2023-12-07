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
        {/* <View style={styles.container}> */}
        <View style={styles.contentContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.introText}>
              Your new recommendation based on your preferences:
            </Text>
          </View>
          <View style={styles.newRecommendation}>
            <Text style={styles.recommendationText}>Slynd</Text>
          </View>
          <View style={styles.buttonContainer}>
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
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 20,
  },
  confirmationText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    textAlign: "center",
  },
  introContainer: {
    paddingBottom: 10,
  },
  recommendationText: {
    fontSize: 26,
    marginBottom: 30,
    fontFamily: "Inter-Light",
  },
  introText: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
  newRecommendation: {
    alignItems: "center",
  },
  detailText: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Inter-Light",
  },
  logButton: {
    backgroundColor: "#009473",
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  linearGradientStyle: {
    width: "100%",
    height: "100%",
  },
});

export default NewPrescriptionConfirmationScreen;
