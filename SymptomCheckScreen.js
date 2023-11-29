import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const SymptomCheckScreen = ({ navigation }) => {
  // This state will hold the selected symptoms
  const [selectedSymptoms, setSelectedSymptoms] = useState({});

  // Function to handle the toggling of symptoms
  const handleToggle = (symptom) => {
    setSelectedSymptoms((prevState) => ({
      ...prevState,
      [symptom]: !prevState[symptom],
    }));
  };

  // Function to submit the selected symptoms
  const handleSubmit = () => {
    navigation.navigate("Confirmation");
  };

  // List of symptoms for the example
  const symptoms = [
    "Migraines",
    "Heavy Spotting",
    "Slight Spotting",
    "Energetic",
    "Lethargic",
    "Nausea",
    "Bloating",
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Select Your Symptoms</Text>
      {symptoms.map((symptom) => (
        <View key={symptom} style={styles.symptomRow}>
          <Text style={styles.symptomText}>{symptom}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={selectedSymptoms[symptom] ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleToggle(symptom)}
            value={!!selectedSymptoms[symptom]}
          />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  symptomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  symptomText: {
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default SymptomCheckScreen;
