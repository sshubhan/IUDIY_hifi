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

// Import screens
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import SymptomCheckScreen from "./SymptomCheckScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import PlaceholderScreen1 from "./PlaceholderScreen1";
import PlaceholderScreen2 from "./PlaceholderScreen2";

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
          } else if (route.name === "Placeholder1") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          } else if (route.name === "Placeholder2") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          }

          // You can return any component that you like here!
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
      <Tab.Screen name="Placeholder1" component={PlaceholderScreen1} />
      <Tab.Screen name="Placeholder2" component={PlaceholderScreen2} />
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
        {/* HomeTabs will be the main screen after login which includes the bottom tabs */}
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        {/* No need to separately list screens that are part of the Tab Navigator */}
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
