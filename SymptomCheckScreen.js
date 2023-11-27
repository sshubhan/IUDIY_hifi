import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

function SymptomCheckScreen() {
  const [symptoms, setSymptoms] = useState({});

  const toggleSwitch = (symptom) => {
    setSymptoms({ ...symptoms, [symptom]: !symptoms[symptom] });
  };

  return (
    <View style={styles.container}>
      <Text>Select Your Symptoms</Text>
      {/* Repeat this block for each symptom */}
      <View style={styles.symptomRow}>
        <Text>Migraines</Text>
        <Switch
          onValueChange={() => toggleSwitch('migraines')}
          value={symptoms['migraines']}
        />
      </View>
      <View style={styles.symptomRow}>
        <Text>Heavy Bleeding</Text>
        <Switch
          onValueChange={() => toggleSwitch('migraines')}
          value={symptoms['migraines']}
        />
      </View>
      <View style={styles.symptomRow}>
        <Text>Lethargic</Text>
        <Switch
          onValueChange={() => toggleSwitch('migraines')}
          value={symptoms['migraines']}
        />
      </View>
      <View style={styles.symptomRow}>
        <Text>Nausea</Text>
        <Switch
          onValueChange={() => toggleSwitch('migraines')}
          value={symptoms['migraines']}
        />
      </View>
      <View style={styles.symptomRow}>
        <Text>Bloating</Text>
        <Switch
          onValueChange={() => toggleSwitch('migraines')}
          value={symptoms['migraines']}
        />
      </View>
      <Button title="Continue" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  symptomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default SymptomCheckScreen;