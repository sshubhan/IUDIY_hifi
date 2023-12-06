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
import supabase from "./Supabase";

const SymptomCheckScreen = ({ navigation }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [customSymptoms, setCustomSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState("");

  // const handleToggle = (symptom) => {
  //   setSelectedSymptoms((prevState) => ({
  //     ...prevState,
  //     [symptom]: !prevState[symptom],
  //   }));
  // };
  const handleToggle = (symptom) => {
    setSelectedSymptoms((prevState) => {
      const isCustomSymptom = customSymptoms.includes(symptom);
      const updatedState = { ...prevState };
      updatedState[symptom] = !prevState[symptom];

      // if (isCustomSymptom) {
      //   // If it's a custom symptom, toggle its state
      //   updatedState[symptom] = !prevState[symptom];
      // } else {
      //   // If it's a default symptom, toggle its state or initialize it to true if it doesn't exist
      //   updatedState[symptom] = !prevState[symptom];
      // }
      return updatedState;
    });
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

  const handleSubmit = async () => {
    const selectedSymptomsArray = Object.keys(selectedSymptoms).filter(
      (symptom) => selectedSymptoms[symptom]
    );

    // Insert a row into your Supabase table
    const { data, error } = await supabase.from("Symptom Log").upsert([
      {
        symptoms: selectedSymptomsArray,
      },
    ]);

    if (error) {
      console.error("Error inserting row:", error.message);
    } else {
      console.log("Row inserted successfully:", data);
    }
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
    <View style={styles.container}>
      <LinearGradient
        colors={["#DCD0FF", "#FFFFFF"]}
        style={[styles.container, styles.linearGradientStyle]}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Select Your Symptoms</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
              {index < defaultSymptoms.length - 1 ||
              customSymptoms.length > 0 ? (
                <View style={styles.separator} />
              ) : null}
            </View>
          ))}

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
          {customSymptoms.length >= 0 && <View style={styles.separator} />}

          {/* Write Your Own section */}
          <View style={styles.symptomContainer}>
            <View style={styles.symptomRow}>
              <TextInput
                placeholder="Write Your Own"
                style={styles.customSymptomInput}
                onChangeText={handleCustomSymptomChange}
                value={customSymptom}
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddCustomSymptom}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.logButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderBottomWidth: 0,
    borderBottomColor: "#ccc",
    paddingTop: 20,
    marginVertical: 20,
  },
  scrollViewContainer: {
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontFamily: "Inter-Light",
  },
  symptomContainer: {
    // marginBottom: 10,
    // marginTop: 10,
  },
  symptomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
  },
  symptomText: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
  customSymptomInput: {
    flex: 1,
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
  buttonContainer: {
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "#009473",
    width: "20%",
    height: "60%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logButton: {
    backgroundColor: "#009473",
    width: "50%",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "25%",
    fontFamily: "Inter-Light",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Inter-Light",
  },
});

export default SymptomCheckScreen;
