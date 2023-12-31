// PastSymptoms.js
import React from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import supabase from "./Supabase";
import Log from "./Log";
import Header from "./Header";

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
        const sortedData = response.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        const formattedData = response.map((item) => {
          const date = new Date(item.timestamp);
          const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
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

    const channels = supabase
      .channel("custom-update-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Symptom Log" },
        (payload) => {
          console.log("Change received!", payload);
          fetchData();
        }
      )
      .subscribe();
    fetchData();

    return () => {
      channels.unsubscribe();
    };
  }, []);

  return (
    <LinearGradient colors={["#DCD0FF", "#FFFFFF"]} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header title="Past Symptom Logs" navigation={navigation} />
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={renderLog}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    width: "90%",
    alighItems: "center",
    paddingBottom: 50,
    marginTop: 10,
  },
  symptomText: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
});

export default PastSymptomsScreen;
