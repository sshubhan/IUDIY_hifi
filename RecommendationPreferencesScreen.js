// RecommendationPreferencesScreen.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from "react-native";

const RecommendationPreferencesScreen = ({ navigation }) => {
  const [preferences, setPreferences] = useState({
    hasBeenOnContraceptives: false,
    sideEffects: '',
    lookingFor: 'Hormonal Oral Contraceptives',
    otherPreferences: ''
  });

  const handleSubmit = () => {
    navigation.navigate("NewPrescriptionConfirmation", { preferences });
  }; 
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Checkbox for previous contraceptive use */}
      <Text style={styles.label}>Have you been on any contraceptives?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPreferences({ ...preferences, hasBeenOnContraceptives: text })}
        value={String(preferences.hasBeenOnContraceptives)}
        placeholder="Yes or No"
      />
      {/* Text input for side effects */}
      <Text style={styles.label}>If so, were there any side effects?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPreferences({ ...preferences, sideEffects: text })}
        value={preferences.sideEffects}
        placeholder="Type any side effects"
      />
      {/* Selection for what they are looking for */}
      <Text style={styles.label}>What are you looking for?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPreferences({ ...preferences, lookingFor: text })}
        value={preferences.lookingFor}
        placeholder="Enter preferences"
      />
      {/* Text input for any other preferences */}
      <Text style={styles.label}>Any other preferences?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPreferences({ ...preferences, otherPreferences: text })}
        value={preferences.otherPreferences}
        placeholder="Enter any other preferences"
      />

      {/* Submit button */}
      <Button title="Get Recommendation" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "stretch",
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: 'black',
    paddingTop: 10,
  },
});

export default RecommendationPreferencesScreen;
