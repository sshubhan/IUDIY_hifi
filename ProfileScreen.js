import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
      style={[styles.container, styles.linearGradientStyle]}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Alex C.</Text>
        <Image
          source={require("../IUDIY_hifi/profPic.png")}
          style={styles.profilePic}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 15,
  },
  text: {
    fontSize: 40,
  },
});

export default ProfileScreen;
