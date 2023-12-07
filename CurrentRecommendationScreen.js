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
import Header from "./Header";

const CurrentRecommendationScreen = ({ navigation }) => {
  const { currentPrescription } = usePrescription();

  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={[styles.container]}>
      <SafeAreaView style={styles.container}>
        <Header title="Current Recommendation" navigation={navigation} />
        {/* </View> */}
        <View style={styles.contentContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.introText}>
              Your current prescription recommendation:
            </Text>
          </View>
          <View style={styles.currentPrescription}>
            <Text style={styles.recommendationText}>{currentPrescription}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("RecommendationPreferences")}
            >
              <Text style={styles.buttonText}>Get a New Recommendation</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Back to Prescriptions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {/* </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
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
    textAlign: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  introText: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
  recommendationText: {
    fontSize: 26,
    marginBottom: 30,
    fontFamily: "Inter-Light",
  },
  button: {
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
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  introContainer: {
    paddingBottom: 10,
  },
  currentPrescription: {
    alignItems: "center",
  },
});

export default CurrentRecommendationScreen;
