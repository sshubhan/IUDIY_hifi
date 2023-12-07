import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NavbarHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{title}</Text>
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
});

export default NavbarHeader;
