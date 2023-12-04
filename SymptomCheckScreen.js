import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CheckBox from "react-native-check-box";
import { LinearGradient } from "expo-linear-gradient";

const SymptomCheckScreen = ({ navigation }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [customSymptoms, setCustomSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState("");

  const handleToggle = (symptom) => {
    setSelectedSymptoms((prevState) => ({
      ...prevState,
      [symptom]: !prevState[symptom],
    }));
  };

  const handleCustomSymptomChange = (text) => {
    setCustomSymptom(text);
  };

  const handleAddCustomSymptom = () => {
    if (customSymptom.trim() !== "") {
      setCustomSymptoms((prevCustomSymptoms) => [
        ...prevCustomSymptoms,
        customSymptom.trim(),
      ]);
      setCustomSymptom("");
    }
  };

  const handleSubmit = () => {
    // Your existing code here
    navigation.navigate("Confirmation");
  };

  const defaultSymptoms = [
    "Migraines",
    "Heavy Spotting",
    "Slight Spotting",
    "Energetic",
    "Lethargic",
    "Nausea",
    "Bloating",
  ];

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Select Your Symptoms</Text>

        {/* List of default symptoms */}
        {defaultSymptoms.map((symptom, index) => (
          <View key={index} style={styles.symptomContainer}>
            <View style={styles.symptomRow}>
              <Text style={styles.symptomText}>{symptom}</Text>
              <CheckBox
                isChecked={!!selectedSymptoms[symptom]}
                onClick={() => handleToggle(symptom)}
                checkBoxColor="#009473"
              />
            </View>
            {index < defaultSymptoms.length - 1 || customSymptoms.length > 0 ? (
              <View style={styles.separator} />
            ) : null}
          </View>
        ))}

        {/* List of custom symptoms */}
        {customSymptoms.map((symptom, index) => (
          <View
            key={index + defaultSymptoms.length}
            style={styles.symptomContainer}
          >
            <View style={styles.symptomRow}>
              <Text style={styles.symptomText}>{symptom}</Text>
              <CheckBox
                isChecked={!!selectedSymptoms[symptom]}
                onClick={() => handleToggle(symptom)}
                checkBoxColor="#009473"
              />
            </View>
            {index < customSymptoms.length - 1 && (
              <View style={styles.separator} />
            )}
          </View>
        ))}

        {/* Write Your Own section */}
        <View style={styles.symptomContainer}>
          <View style={styles.symptomRow}>
            <TextInput
              placeholder="Write Your Own"
              style={styles.customSymptomInput}
              onChangeText={handleCustomSymptomChange}
              value={customSymptom}
            />
            <Button title="Add" onPress={handleAddCustomSymptom} />
          </View>
        </View>

        <TouchableOpacity style={styles.logButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {/* <View style={styles.buttonContainer}>
          <Button title="Continue" onPress={handleSubmit} />
        </View> */}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradientStyle: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  symptomContainer: {
    marginBottom: 25,
  },
  symptomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
  },
  symptomText: {
    fontSize: 22,
  },
  customSymptomInput: {
    flex: 1,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
  },
  logButton: {
    backgroundColor: "#009473",
    width: 300,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default SymptomCheckScreen;
