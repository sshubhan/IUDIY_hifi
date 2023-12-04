import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const PharmacyMapScreen = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 37.3541,
    longitude: -122.0000,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const pharmacies = [
    { id: 1, title: "CVS Pharmacy", latitude: 37.354167, longitude: -122.010000 },
    { id: 2, title: "CVS Pharmacy", latitude: 37.370000, longitude: -122.020000 },
    { id: 3, title: "Target Pharmacy", latitude: 37.360000, longitude: -122.030000 },
  ];

  const zoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  const zoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {pharmacies.map((pharmacy) => (
          <Marker
            key={pharmacy.id}
            coordinate={{ latitude: pharmacy.latitude, longitude: pharmacy.longitude }}
            title={pharmacy.title}
            onCalloutPress={() => navigation.navigate('PharmacyDetailScreen', { pharmacy })}
          >
            {/* Customized Marker Icon */}
            <Ionicons name="location" size={40} color="red" />
          </Marker>
        ))}
      </MapView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
      <View style={styles.zoomControls}>
        <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
          <Text style={styles.zoomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
          <Text style={styles.zoomText}>-</Text>
        </TouchableOpacity>
      </View>
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
    top: 40,
    left: 10,
    padding: 10,
    zIndex: 10,
  },
  zoomControls: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  zoomButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PharmacyMapScreen;
