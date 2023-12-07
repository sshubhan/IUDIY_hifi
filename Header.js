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

      <View style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,

    borderBottomColor: "#ccc",
    paddingBottom: 15,
  },
  header: {
    flex: 5,
    alignContent: "center",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Inter-Light",
  },
  arrowContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  backButton: {
    padding: 10,
  },
});

export default Header;
