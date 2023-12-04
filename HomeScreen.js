import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#fff", "#f0f0f0"]} // Adjust gradient colors as needed
      style={styles.container}
    >
      <View style={styles.header}>
        {/* <Image style={styles.logo} source={require("./logo.png")} /> */}
      </View>
      <Text style={styles.welcomeText}>Welcome Alex!</Text>
      <View style={styles.square}>
        <Text style={styles.reminderText}>Take Yasmin in 34 minutes</Text>
      </View>
      <TouchableOpacity
        style={styles.logButton}
        onPress={() => navigation.navigate("Symptom Log")}
      >
        <Text style={styles.buttonText}>Log Your Symptoms</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: "50%",
  },
  welcomeText: {
    fontSize: 30,
    color: "black",
    margin: 10,
  },
  square: {
    width: "85%",
    // height: "80%",
    aspectRatio: 1,
    borderRadius: 20, // Adjust the borderRadius for a rounded square
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  reminderText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  logButton: {
    backgroundColor: "#009473",
    width: 300,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeScreen;
