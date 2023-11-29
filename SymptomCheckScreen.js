import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import CheckBox from "react-native-check-box";

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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Select Your Symptoms</Text>

      {/* List of default symptoms */}
      {defaultSymptoms.map((symptom, index) => (
        <View key={index} style={styles.symptomRow}>
          <Text style={styles.symptomText}>{symptom}</Text>
          <CheckBox
            isChecked={!!selectedSymptoms[symptom]}
            onClick={() => handleToggle(symptom)}
            checkBoxColor="#009473"
          />
        </View>
      ))}

      {/* List of custom symptoms */}
      {customSymptoms.map((symptom, index) => (
        <View key={index + defaultSymptoms.length} style={styles.symptomRow}>
          <Text style={styles.symptomText}>{symptom}</Text>
          <CheckBox
            isChecked={!!selectedSymptoms[symptom]}
            onClick={() => handleToggle(symptom)}
            checkBoxColor="#009473"
          />
        </View>
      ))}

      {/* Write Your Own section */}
      <View style={styles.symptomRow}>
        <TextInput
          placeholder="Write Your Own"
          style={styles.customSymptomInput}
          onChangeText={handleCustomSymptomChange}
          value={customSymptom}
        />
        <Button title="Add" onPress={handleAddCustomSymptom} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};
// const SymptomCheckScreen = ({ navigation }) => {
//   const [selectedSymptoms, setSelectedSymptoms] = useState({});
//   const [customSymptoms, setCustomSymptoms] = useState([]);
//   const [customSymptom, setCustomSymptom] = useState("");

//   const handleToggle = (symptom) => {
//     setSelectedSymptoms((prevState) => ({
//       ...prevState,
//       [symptom]: !prevState[symptom],
//     }));
//   };

//   const handleCustomSymptomChange = (text) => {
//     setCustomSymptom(text);
//   };

//   const handleAddCustomSymptom = () => {
//     if (customSymptom.trim() !== "") {
//       setCustomSymptoms([...customSymptoms, customSymptom.trim()]);
//       setCustomSymptom("");
//     }
//   };

//   const handleSubmit = () => {
//     // Your existing code here
//     navigation.navigate("Confirmation");
//   };

//   const symptoms = [
//     "Migraines",
//     "Heavy Spotting",
//     "Slight Spotting",
//     "Energetic",
//     "Lethargic",
//     "Nausea",
//     "Bloating",
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Select Your Symptoms</Text>

//       {/* Existing symptoms */}
//       {symptoms.map((symptom) => (
//         <View key={symptom} style={styles.symptomRow}>
//           <Text style={styles.symptomText}>{symptom}</Text>
//           <Switch
//             trackColor={{ false: "#767577", true: "#81b0ff" }}
//             thumbColor={selectedSymptoms[symptom] ? "#f5dd4b" : "#f4f3f4"}
//             ios_backgroundColor="#3e3e3e"
//             onValueChange={() => handleToggle(symptom)}
//             value={!!selectedSymptoms[symptom]}
//           />
//         </View>
//       ))}

//       {/* Write Your Own section */}
//       <View style={styles.symptomRow}>
//         <TextInput
//           placeholder="Write Your Own"
//           style={styles.customSymptomInput}
//           onChangeText={handleCustomSymptomChange}
//           value={customSymptom}
//         />
//         <Button title="Add" onPress={handleAddCustomSymptom} />
//       </View>

//       {/* List of custom symptoms */}
//       {customSymptoms.map((customSymptom, index) => (
//         <View key={index} style={styles.symptomRow}>
//           <Text style={styles.symptomText}>{customSymptom}</Text>
//           <Switch
//             trackColor={{ false: "#767577", true: "#81b0ff" }}
//             thumbColor={selectedSymptoms[customSymptom] ? "#f5dd4b" : "#f4f3f4"}
//             ios_backgroundColor="#3e3e3e"
//             onValueChange={() => handleToggle(customSymptom)}
//             value={!!selectedSymptoms[customSymptom]}
//           />
//         </View>
//       ))}

//       <View style={styles.buttonContainer}>
//         <Button title="Continue" onPress={handleSubmit} />
//       </View>
//     </ScrollView>
//   );
// };

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
  customSymptomInput: {
    flex: 1,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default SymptomCheckScreen;
