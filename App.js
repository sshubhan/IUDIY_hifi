import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import SymptomCheckScreen from "./SymptomCheckScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import Icon from "react-native-vector-icons/Fontisto";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Symptoms") {
            iconName = "pills";
          } // } else if (route.name === "Profile") {
          //   iconName = "user";
          // } else if (route.name === "Profile") {
          //   iconName = "user";
          // }

          return <Icon name={iconName} color={"#009473"} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Symptoms" component={SymptomCheckScreen} />
      {/* <Tab.Screen name="Perscriptions" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} /> */}
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
        <Stack.Screen name="SymptomCheck" component={SymptomCheckScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
