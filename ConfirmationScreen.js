import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ConfirmationScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <View style={styles.container}>
        <Text style={styles.confirmationText}>
          Your symptoms have been logged.
        </Text>
        <Button
          title="Check earlier symptoms"
          onPress={() => {
            // Here you can navigate to a screen where the user can view their symptom history
          }}
        />
      </View>
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
  },
});

export default ConfirmationScreen;
