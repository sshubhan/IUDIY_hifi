// PharmacyMapScreen.js
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const PharmacyMapScreen = ({ navigation }) => {
  // Mock data for pharmacies in the South Bay area - replace with real data
  const pharmacies = [
    { id: 1, title: "CVS Pharmacy", latitude: 37.428271, longitude: -122.143719 }, // Example location in Palo Alto
    { id: 2, title: "CVS Pharmacy", latitude: 37.322998, longitude: -122.032182 }, // Example location in Cupertino
    { id: 3, title: "Target Pharmacy", latitude: 37.400000, longitude: -122.082456 }, 
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.3541, // Rough center of the South Bay area
          longitude: -121.9552,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {pharmacies.map((pharmacy) => (
          <Marker
            key={pharmacy.id}
            coordinate={{ latitude: pharmacy.latitude, longitude: pharmacy.longitude }}
            title={pharmacy.title}
            onCalloutPress={() => navigation.navigate('PharmacyDetailScreen', { pharmacy })}
          />
        ))}
      </MapView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust as needed
    left: 10, // Adjust as needed
    padding: 10,
    zIndex: 10, // Ensure the button is above the map elements
  },
});

export default PharmacyMapScreen;
