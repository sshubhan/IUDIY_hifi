// RecommendationPreferencesScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";

const RecommendationPreferencesScreen = ({ navigation }) => {
  const [preferences, setPreferences] = useState({
    hasBeenOnContraceptives: "",
    sideEffects: "",
    lookingFor: "",
    otherPreferences: "",
  });

  const handleSubmit = () => {
    console.log("Before navigation");

    navigation.navigate("NewPrescriptionConfirmation");
  };

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <SafeAreaView style={styles.container}>
        <Header title="Get Recommendation" navigation={navigation} />
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.label}>Have you been on any contraceptives?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setPreferences({ ...preferences, hasBeenOnContraceptives: text })
            }
            value={String(preferences.hasBeenOnContraceptives)}
            placeholder="Yes or No"
          />
          <Text style={styles.label}>If so, were there any side effects?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setPreferences({ ...preferences, sideEffects: text })
            }
            value={preferences.sideEffects}
            placeholder="Type any side effects"
          />
          <Text style={styles.label}>What are you looking for?</Text>

          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setPreferences({ ...preferences, lookingFor: text })
            }
            value={preferences.lookingFor}
            placeholder="Enter preferences"
          />
          <Text style={styles.label}>Any other preferences?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setPreferences({ ...preferences, otherPreferences: text })
            }
            value={preferences.otherPreferences}
            placeholder="Enter any other preferences"
          />

          <TouchableOpacity style={styles.logButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Get Recommendation</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
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
    fontFamily: "Inter-Regular",
  },
  label: {
    fontSize: 16,
    color: "black",
    paddingTop: 10,
    fontFamily: "Inter-Regular",
  },
  logButton: {
    backgroundColor: "#009473",
    width: "80%",
    height: "10%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderBottomWidth: 0,
    borderBottomColor: "#ccc",
    paddingBottom: 15,
  },
  header: {
    fontSize: 28,
    fontFamily: "Inter-Light",
    marginTop: 22,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: -7,
    top: 47,

    padding: 10,
  },
});

export default RecommendationPreferencesScreen;
