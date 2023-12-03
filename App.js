// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import LoginScreen from "./LoginScreen";
// import HomeScreen from "./HomeScreen";
// import SymptomCheckScreen from "./SymptomCheckScreen";
// import ConfirmationScreen from "./ConfirmationScreen";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       {/* Add more tabs as needed */}
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="HomeTabs"
//           component={HomeTabs}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="Symptom Check" component={SymptomCheckScreen} />
//         <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
      <Tab.Screen name="Symptom Log" component={SymptomCheckScreen} />
      <Tab.Screen name="Prescriptions" component={PrescriptionsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
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
          options={{ title: 'Pharmacy Locations' }} // Customize your options
        />
        <Stack.Screen
          name="PharmacyDetailScreen"
          component={PharmacyDetailScreen}
          options={{ title: 'Pharmacy Details' }} // Customize your options
        />
        {/* Add other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
