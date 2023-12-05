import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from "expo-font";
// import "@fontsource/inter";

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

// import { useCallback } from "react";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
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
        component={SymptomCheckScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Prescriptions" component={PrescriptionsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  // const [dataLoaded, setDataLoaded] = useState(false);

  // const loadFonts = async () => {
  //   try {
  //     await Font.loadAsync({
  //       "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  //     });

  //     setDataLoaded(true);
  //   } catch (error) {
  //     console.error("Error loading fonts:", error);
  //   }
  // };

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={console.warn} // Handle errors during font loading
  //     />
  //   );
  // }
  return (
    <NavigationContainer>
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
          options={{ title: "Pharmacy Locations" }} // Customize your options
        />
        <Stack.Screen
          name="PharmacyDetailScreen"
          component={PharmacyDetailScreen}
          options={{ title: "Pharmacy Details" }} // Customize your options
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
