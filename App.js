import React, { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Import the PrescriptionProvider
import { PrescriptionProvider } from "./PrescriptionContext"; // Adjust this path as needed

// Import your screens
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import SymptomCheckScreen from "./SymptomCheckScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import PrescriptionsScreen from "./PrescriptionsScreen";
import ProfileScreen from "./ProfileScreen";
import RecommendationPreferencesScreen from "./RecommendationPreferencesScreen";
import NewPrescriptionConfirmationScreen from "./NewPrescriptionConfirmationScreen";
import CurrentRecommendationScreen from "./CurrentRecommendationScreen";
import PharmacyMapScreen from "./PharmacyMapScreen";
import PharmacyDetailScreen from "./PharmacyDetailScreen";
import PastSymptomsScreen from "./PastSymptomsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SymptomLogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SymptomCheck"
        component={SymptomCheckScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecommendationPreferences"
        component={RecommendationPreferencesScreen}
      />
      <Stack.Screen
        name="NewPrescriptionConfirmation"
        component={NewPrescriptionConfirmationScreen}
      />
      <Stack.Screen
        name="PastSymptoms"
        component={PastSymptomsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  const symptomLogStackName = SymptomLogStack();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Symptom Log") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Prescriptions") {
            iconName = focused ? "ios-medkit" : "ios-medkit-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#009473",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Symptom Log"
        component={SymptomLogStack}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Symptom Log", { screen: "SymptomCheck" });
          },
        })}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Prescriptions"
        component={PrescriptionsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PrescriptionProvider>
      <NavigationContainer onLayout={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
          <Stack.Screen
            name="RecommendationPreferences"
            component={RecommendationPreferencesScreen}
          />
          <Stack.Screen
            name="NewPrescriptionConfirmation"
            component={NewPrescriptionConfirmationScreen}
          />
          <Stack.Screen
            name="CurrentRecommendation"
            component={CurrentRecommendationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PharmacyMapScreen"
            component={PharmacyMapScreen}
            options={{ title: "Pharmacy Locations" }}
          />
          <Stack.Screen
            name="PharmacyDetailScreen"
            component={PharmacyDetailScreen}
            options={{ title: "Pharmacy Details" }}
          />
          {/* Add other screens as needed */}
        </Stack.Navigator>
      </NavigationContainer>
    </PrescriptionProvider>
  );
}
