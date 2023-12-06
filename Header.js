// Header.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>{title}</Text>
      {/* Add an empty view to keep the arrow to the left */}
      <View style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 30,
  },
  header: {
    fontSize: 28,
    fontFamily: "Inter-Light",
  },
  arrowContainer: {
    justifyContent: "flex-start",
  },
  backButton: {
    padding: 10,
  },
});

export default Header;
