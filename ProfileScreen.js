import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavbarHeader from "./navbarHeader";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  const [menstrualHistory, setMenstrualHistory] = useState("");
  const [familyHealthHistory, setFamilyHealthHistory] = useState("");

  const handleUpdateInformation = () => {
    // Implement what should happen when information is updated
    // For demonstration, I'm just logging to the console
    console.log("Menstrual History:", menstrualHistory);
    console.log("Family Health History:", familyHealthHistory);
    // Here, you might want to send this data to a backend server or store it locally
  };

  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <NavbarHeader title="Alex C." navigation={navigation} />
        <View style={styles.contentContainer}>
          <Image source={require("./profPic.png")} style={styles.profilePic} />
          <Text style={styles.inputLabel}>
            Please describe your menstrual history:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setMenstrualHistory}
            value={menstrualHistory}
            multiline
            placeholder="Type here..."
          />
          <Text style={styles.inputLabel}>
            Please describe relevant family health history:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setFamilyHealthHistory}
            value={familyHealthHistory}
            multiline
            placeholder="Type here..."
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleUpdateInformation}
          >
            <Text style={styles.buttonText}>Update Information</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  linearGradientStyle: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    alignItems: "center",
    padding: 20,
  },
  profilePic: {
    width: 0.5 * windowWidth,
    height: 0.5 * windowWidth,
    aspectRatio: 1,
    borderRadius: 0.25 * windowWidth,
  },
  inputLabel: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    fontSize: 16,
    fontFamily: "Inter-Regular",
    textAlignVertical: "top", // Aligns text to top for Android
  },
  button: {
    backgroundColor: "#009473",
    padding: 15,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontFamily: "Inter-Regular",
    fontSize: 18,
  },
});

export default ProfileScreen;
