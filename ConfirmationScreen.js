import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";

const ConfirmationScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]}
      style={[styles.container, styles.linearGradientStyle]}
    >
      <SafeAreaView style={styles.container}>
        <Header title="Log Confirmation" navigation={navigation} />

        <View style={styles.container}>
          <Text style={styles.confirmationText}>
            Your symptoms have been logged.
          </Text>
          <TouchableOpacity
            style={styles.logButton}
            onPress={() => navigation.navigate("PastSymptoms")}
          >
            <Text style={styles.buttonText}>Check Earlier Symptoms</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
  },
  linearGradientStyle: {
    padding: 20,
    flex: 1,
  },
  confirmationText: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Inter-Light",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Inter-Light",
    color: "white",
  },
  backButton: {
    position: "absolute",
    padding: 10,
    zIndex: 1,
  },
  logButton: {
    backgroundColor: "#009473",
    width: "100%",
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter-Light",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 30,
    paddingBottom: 30,
  },
});

export default ConfirmationScreen;
