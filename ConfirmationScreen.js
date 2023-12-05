import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ConfirmationScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]}
      style={[styles.container, styles.linearGradientStyle]}
    >
      <View style={styles.container}>
        <Text style={styles.confirmationText}>
          Your symptoms have been logged.
        </Text>
        <TouchableOpacity
          style={styles.logButton}
          onPress={() => navigation.navigate("PastSymptoms")}
        >
          <Text style={styles.buttonText}>Check Earlier Symptoms</Text>
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
    // padding: 20,
  },
  confirmationText: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Inter-Light",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Inter-Light",
  },
  logButton: {
    backgroundColor: "#009473",
    width: "100%",
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter-Light",
    padding: 20,
  },
});

export default ConfirmationScreen;
