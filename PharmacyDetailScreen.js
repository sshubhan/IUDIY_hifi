// PharmacyDetailScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PharmacyDetailScreen = ({ route, navigation }) => {
  const { pharmacy } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
      <View style={styles.square}>
        <Text style={styles.header}>PHARMACY INFORMATION</Text>
        <Text style={styles.detailText}>Name: {pharmacy.title}</Text>
        <Text style={styles.detailText}>Latitude: {pharmacy.latitude}</Text>
        <Text style={styles.detailText}>Longitude: {pharmacy.longitude}</Text>
        <Text style={styles.detailText}>Slynd found in this location.</Text>
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
  square: {
    width: "85%",
    aspectRatio: 1,
    borderRadius: 70, // Adjust the borderRadius for a rounded square
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  backButton: {
    position: "absolute",
    top: 40, // Adjust as needed
    left: 10, // Adjust as needed
    padding: 10,
    zIndex: 10, // Ensure the button is above other content
  },
  // Add other styles as needed
});

export default PharmacyDetailScreen;
