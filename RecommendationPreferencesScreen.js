// RecommendationPreferencesScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const RecommendationPreferencesScreen = ({ navigation }) => {
  const [preferences, setPreferences] = useState({
    hasBeenOnContraceptives: "No",
    sideEffects: "",
    lookingFor: "Hormonal Oral Contraceptives",
    otherPreferences: "",
  });

  const handleSubmit = () => {
    navigation.navigate("NewPrescriptionConfirmation", { preferences });
  };

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Checkbox for previous contraceptive use */}
        <Text style={styles.label}>Have you been on any contraceptives?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setPreferences({ ...preferences, hasBeenOnContraceptives: text })
          }
          value={String(preferences.hasBeenOnContraceptives)}
          placeholder="Yes or No"
        />
        {/* Text input for side effects */}
        <Text style={styles.label}>If so, were there any side effects?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setPreferences({ ...preferences, sideEffects: text })
          }
          value={preferences.sideEffects}
          placeholder="Type any side effects"
        />
        {/* Selection for what they are looking for */}
        <Text style={styles.label}>What are you looking for?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setPreferences({ ...preferences, lookingFor: text })
          }
          value={preferences.lookingFor}
          placeholder="Enter preferences"
        />
        {/* Text input for any other preferences */}
        <Text style={styles.label}>Any other preferences?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setPreferences({ ...preferences, otherPreferences: text })
          }
          value={preferences.otherPreferences}
          placeholder="Enter any other preferences"
        />

        {/* Submit button */}
        <TouchableOpacity style={styles.logButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Get Recommendation</Text>
        </TouchableOpacity>
        {/* <Button title="Get Recommendation" onPress={handleSubmit} /> */}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "stretch",
    flex: 1,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: "black",
    paddingTop: 10,
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
  },
});

export default RecommendationPreferencesScreen;
