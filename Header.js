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
      {/* <View style={styles.arrowContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,

    borderBottomColor: "#ccc",
    paddingBottom: 15,
  },
  header: {
    // paddingLeft: 100,
    flex: 5,
    alignContent: "center",
    textAlign: "center",
    // backgroundColor: "blue",
    fontSize: 24,
    fontFamily: "Inter-Light",
  },
  arrowContainer: {
    flex: 1,
    // backgroundColor: "yellow",

    justifyContent: "flex-start",
  },
  backButton: {
    padding: 10,
  },
});

export default Header;
