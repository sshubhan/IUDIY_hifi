import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.confirmationText}>Your symptoms have been logged.</Text>
      <Button
        title="Check earlier symptoms"
        onPress={() => {
          // Here you can navigate to a screen where the user can view their symptom history
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  confirmationText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ConfirmationScreen;
