// CurrentRecommendationScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CurrentRecommendationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Close Button in the Header */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate('HomeTabs')}>
        <Ionicons name="close-circle" size={30} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.titleText}>Current Recommendation</Text>
      <Text style={styles.recommendationText}>Yasmin</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecommendationPreferences')}>
        <Text style={styles.buttonText}>Get a New Prescription</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={() => navigation.navigate('HomeTabs')}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Assuming a light gray background
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  recommendationText: {
    fontSize: 18,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#009473', // Assuming a teal color for the primary button
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    width: 200, // Set a fixed width or use a percentage
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red', // Red color for the cancel button
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  // Add other styles as necessary
});

export default CurrentRecommendationScreen;
