// PastSymptoms.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import supabase from "./Supabase";
import Log from "./Log";
import { Ionicons } from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";

// const renderLog = ({ item }) => {
//   return (
//     <Log id={item.id} timestamp={item.timestamp} symptoms={item.symptoms} />
//   );
// };
const renderLog = ({ item }) => {
  return (
    <Log
      id={item.id}
      timestamp={item.timestamp}
      symptoms={`Symptoms: ${item.symptoms}`}
    />
  );
};

const PastSymptomsScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response, error } = await supabase
          .from("Symptom Log")
          .select("id, timestamp, symptoms");
        setData(response);
        const formattedData = response.map((item) => {
          const date = new Date(item.timestamp);
          const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

          // Format symptoms as a comma-separated list
          const formattedSymptoms = item.symptoms.join(", ");

          return {
            ...item,
            timestamp: formattedDate,
            symptoms: formattedSymptoms,
          };
        });

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.header}>Past Symptom Logs</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={renderLog}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
    // padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,

    paddingTop: 20,
    marginVertical: 20,
  },
  header: {
    fontSize: 28,
    fontFamily: "Inter-Light",
  },
  listContainer: {
    flex: 1,
    width: "90%",
    alighItems: "center",
    paddingBottom: 50,
  },
  symptomText: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
  backButton: {
    position: "absolute",
    top: 25, // Adjust as needed
    left: -40, // Adjust as needed
  },
});

export default PastSymptomsScreen;
