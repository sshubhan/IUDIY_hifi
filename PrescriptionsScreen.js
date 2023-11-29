import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PrescriptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a placeholder screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 40,
    textAlignVertical: "top",
  },
});

export default PrescriptionsScreen;
