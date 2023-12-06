import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePrescription } from "./PrescriptionContext";
import { LinearGradient } from "expo-linear-gradient";

const CurrentRecommendationScreen = ({ navigation }) => {
  const { currentPrescription } = usePrescription();

  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={[styles.container]}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>

          <Text style={styles.titleText}>Current Prescription</Text>
        </View>
        {/* </View> */}
        <View style={styles.contentContainer}>
          <View style={styles.currentPrescription}>
            <Text style={styles.recommendationText}>{currentPrescription}</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("RecommendationPreferences")}
          >
            <Text style={styles.buttonText}>Get a New Prescription</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Return Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  // closeButton: {
  //   position: "absolute",
  //   top: 40,
  //   right: 20,
  // },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  recommendationText: {
    fontSize: 18,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#009473", // Assuming a teal color for the primary button
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    width: "80%", // Set a fixed width or use a percentage
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#009473", // Red color for the cancel button
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  currentPrescription: {},
});

export default CurrentRecommendationScreen;
