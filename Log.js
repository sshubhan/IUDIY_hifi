import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import supabase from "./Supabase";

const Log = ({ id, timestamp, symptoms }) => {
  //   const [selectedSymptoms, setSymptoms] = useState([]);

  //   useEffect(() => {
  //     // Fetch symptoms from Supabase based on the item id
  //     const fetchSymptoms = async () => {
  //       const { data, error } = await supabase
  //         .from("Symptom Log")
  //         .select("symptoms");

  //       if (error) {
  //         console.error("Error fetching symptoms:", error.message);
  //       } else {
  //         const symptomsArray = data.map((item) => item.symptoms).flat();
  //         setSymptoms(symptomsArray);
  //       }
  //     };

  //     fetchSymptoms();
  //   }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{timestamp}</Text>
      </View>
      <View style={styles.body}>
        <Text>{symptoms}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: "100%",
    marginBottom: 10,
    gap: 4,
    textColor: "black",
  },
  heart: {
    width: 20,
    height: 18,
  },
  textInput: {
    opacity: "50%",
    backgroundColor: "lightblue",
    borderRadius: 5,
    padding: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
    gap: 8,
  },
  profilePic: {
    width: 32,
    height: 32,
    marginRight: 4,
    borderRadius: "50%",
    // borderTopRightRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Log;
