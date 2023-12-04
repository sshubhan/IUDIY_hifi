import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
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
    // "Energetic",
    "Lethargic",
    "Nausea",
    "Bloating",
  ];

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Select Your Symptoms</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Text style={styles.header}>Select Your Symptoms</Text> */}

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

        <View style={styles.buttonContainer}>
          <Button title="Continue" onPress={handleSubmit} />
        </View>
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
  headerContainer: {
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderBottomWidth: 0,
    borderBottomColor: "#ccc", // Add a border to separate header from content
    paddingTop: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  symptomContainer: {
    marginBottom: 10,
    marginTop: 10,
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
    fontSize: 22,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default SymptomCheckScreen;
