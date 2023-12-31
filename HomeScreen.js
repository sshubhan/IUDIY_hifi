// HomeScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { usePrescription } from "./PrescriptionContext";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const { currentPrescription } = usePrescription();

  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../IUDIY_hifi/logo.png")} />
      </View>
      <Text style={styles.welcomeText}>Welcome Alex!</Text>
      <View style={styles.circle}>
        <Text style={styles.reminderText}>
          Take {currentPrescription} in 34 minutes
        </Text>
      </View>
      <TouchableOpacity
        style={styles.logButton}
        onPress={() =>
          navigation.navigate("Symptom Log", { screen: "SymptomCheck" })
        }
      >
        <Text style={styles.buttonText}>Log Your Symptoms</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logButton}
        onPress={() =>
          navigation.navigate("Symptom Log", { screen: "PastSymptoms" })
        }
      >
        <Text style={styles.buttonText}>View Your Past Symptoms</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  logo: {
    width: "50%",
  },
  welcomeText: {
    fontSize: 30,
    color: "black", // #6E0198
    margin: 10,
    fontFamily: "Inter-Light",
  },
  circle: {
    width: "75%",
    aspectRatio: 1,
    borderRadius: 170,
    backgroundColor: "#9d6bcf",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  reminderText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Inter-Light",
  },
  logButton: {
    backgroundColor: "#009473",
    width: 300,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Inter-Light",
  },
  header: {
    justifyContent: "center",
    margin: 15,
  },
  logo: {
    width: windowWidth * 0.87,
    height: windowHeight * 0.17,
    marginRight: 15,
    borderRadius: 5,
  },
});

export default HomeScreen;
