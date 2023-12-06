// // PrescriptionsScreen.js
// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";

// const PrescriptionsScreen = ({ navigation }) => {
//   return (
//     <LinearGradient
//       colors={["#DCD0FF", "#FFFFFF"]} // You can adjust the gradient colors as needed
//       style={[styles.container, styles.linearGradientStyle]}
//     >
//       <View style={styles.headerContainer}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={styles.backButton}
//         >
//           <Ionicons name="arrow-back" size={25} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.header}>Your Prescriptions</Text>
//       </View>
//       <View style={styles.contentContainer}>
//         {/* Button to find prescription locations */}
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("PharmacyMapScreen")}
//         >
//           <Text style={styles.buttonText}>Where to Find Prescription</Text>
//         </TouchableOpacity>

//         {/* Button to get a new recommendation */}
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("RecommendationPreferences")}
//         >
//           <Text style={styles.buttonText}>Get a New Recommendation</Text>
//         </TouchableOpacity>

//         {/* Button to get your current recommendation */}
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("CurrentRecommendationScreen")}
//         >
//           <Text style={styles.buttonText}>Current Prescription</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     fontFamily: "Inter-Light",
//   },
//   button: {
//     backgroundColor: "#009473",
//     padding: 15,
//     borderRadius: 25,
//     marginBottom: 20,
//     width: "80%", // Adjust the width as needed
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//     textAlign: "center", // Ensure the text is centered
//   },
//   headerContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 30,
//     borderBottomWidth: 0,
//     borderBottomColor: "#ccc",
//     paddingBottom: 30,
//   },
//   header: {
//     fontSize: 28,
//     fontFamily: "Inter-Light",
//     marginTop: 22,
//   },
//   backButton: {
//     position: "absolute",
//     top: 55, // Adjust as needed
//     left: -50, // Adjust as needed
//   },
// });

// export default PrescriptionsScreen;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const PrescriptionsScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.header}>Your Prescriptions</Text>
        </View>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PharmacyMapScreen")}
          >
            <Text style={styles.buttonText}>Where to Find Prescription</Text>
          </TouchableOpacity>

          {/* Button to get a new recommendation */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("RecommendationPreferences")}
          >
            <Text style={styles.buttonText}>Get a New Recommendation</Text>
          </TouchableOpacity>

          {/* Button to get your current recommendation */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CurrentRecommendationScreen")}
          >
            <Text style={styles.buttonText}>Current Prescription</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#009473",
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
    width: "80%", // Adjust the width as needed
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 30,
  },
  header: {
    fontSize: 28,
    fontFamily: "Inter-Light",
  },
  backButton: {
    position: "absolute",
    left: 10,
    padding: 10,
    zIndex: 1,
  },
});

export default PrescriptionsScreen;
