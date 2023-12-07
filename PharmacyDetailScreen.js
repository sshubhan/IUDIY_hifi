import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";

const PharmacyDetailScreen = ({ route, navigation }) => {
  const { pharmacy } = route.params;
  const [address, setAddress] = useState("");

  // Fetch address based on lat and long
  const fetchAddress = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pharmacy.latitude},${pharmacy.longitude}&key=AIzaSyAcIjRQev-laMvhy-Auetg2cBunSWm17xk`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      } else {
        console.warn("No results found for the given coordinates.");
      }
    } catch (error) {
      console.error("Error fetching address:", error.message);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]}
      style={[styles.container, styles.linearGradientStyle]}
    >
      <SafeAreaView style={styles.container}>
        <Header title="Pharmacy Information" navigation={navigation} />
        <View style={styles.container}>
          <Image
            style={styles.pin}
            source={require("../IUDIY_hifi/mapPin.png")}
          />
          <View style={styles.square}>
            <Text style={styles.detailText}>Name: {pharmacy.title}</Text>
            <Text style={styles.detailText}>Address: {address}</Text>
            <Text style={styles.detailText}>
              Yasmine and Slynd found in this location.
            </Text>
          </View>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 5,
    margin: 5,
    color: "white",
    textAlign: "center",
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
});

export default PharmacyDetailScreen;
