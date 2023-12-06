// PharmacyDetailScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

//const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const PharmacyDetailScreen = ({ route, navigation }) => {
  const { pharmacy } = route.params;

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Pharmacy Information</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.pin}
          source={require("../IUDIY_hifi/mapPin.png")}
        />
        <View style={styles.square}>
          <Text style={styles.detailText}>Name: {pharmacy.title}</Text>
          <Text style={styles.detailText}>Latitude: {pharmacy.latitude}</Text>
          <Text style={styles.detailText}>Longitude: {pharmacy.longitude}</Text>
          <Text style={styles.detailText}>Slynd found in this location.</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  square: {
    width: "85%",
    aspectRatio: 1,
    borderRadius: 70,
    backgroundColor: "#9d6bcf",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  backButton: {
    position: "absolute",
    top: 65, // Adjust as needed
    left: -35, // Adjust as needed
  },
  pin: {
    width: 300,
    height: 250,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0,
    borderBottomColor: "#ccc",
    paddingBottom: 15,
    paddingTop: 40,
    flexDirection: "row",
  },
  header: {
    fontSize: 28,
    fontFamily: "Inter-Light",
    marginTop: 22,
    justifyContent: "center",
  },
  // Add other styles as needed
});

export default PharmacyDetailScreen;
