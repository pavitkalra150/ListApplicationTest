// components/CountryItem.js
import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

const CountryItem = ({ country }) => {
  return (
    <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.flag}>{country.flag}</Text>
      <Text style={styles.name}>{country.name}</Text>
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingHorizontal: 16,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    flag: {
      fontSize: 24,
    },
    name: {
      fontSize: 18,
      marginLeft: 10,
    },
  });

export default CountryItem;