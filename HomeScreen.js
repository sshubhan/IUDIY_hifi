// screens/HomeScreen.js
// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.reminderText}>Take Yasmin in 34 minutes</Text>
//       <Button
//         title="Log Your Symptoms"
//         // onPress={() => navigation.navigate("Log Your Symptoms")}
//         onPress={() => navigation.navigate("Symptom Check")}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   reminderText: {
//     fontSize: 20,
//     color: "red",
//     marginBottom: 20,
//   },
// });

// export default HomeScreen;

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.reminderText}>Take Yasmin in 34 minutes</Text>
      </View>
      <Button
        title="Log Your Symptoms"
        onPress={() => navigation.navigate("Symptom Log")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100, // half of the width and height to create a circle
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  reminderText: {
    fontSize: 20,
    color: "white",
  },
});

export default HomeScreen;
