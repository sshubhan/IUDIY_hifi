import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavbarHeader from "./navbarHeader";

const PrescriptionsScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <NavbarHeader title="Your Prescriptions" navigation={navigation} />
        <View style={styles.contentContainer}>
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

          {/* Button to get your current recommendation */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CurrentRecommendation")}
          >
            <Text style={styles.buttonText}>Current Recommendation</Text>
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
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
});

export default PrescriptionsScreen;
