// screens/CountryDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountryDetailsScreen = ({ route }) => {
  const { description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
  },
});

export default CountryDetailsScreen;