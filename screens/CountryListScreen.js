import React from 'react';
import { FlatList, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { countries } from '../data/countries';
import CountryItem from '../components/CountryItem';

const CountryListScreen = () => {
    const navigation = useNavigation();
  
    const handleRowPress = (description) => {
      navigation.navigate('CountryDetails', { description });
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Countries</Text>
        <FlatList
          data={countries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRowPress(item.description)}>
              <View style={styles.row}>
                <Text style={styles.flag}>{item.flag}</Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    );
  };
const styles = StyleSheet.create({
    container: {
        flex: 1, // Use flex property to expand to the entire screen
         flexDirection: 'column', // Ensure it's a column layout
        backgroundColor: '#fff', // Set your background color here
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16, // Add margin to the top of the heading
      },
      list: {
        paddingHorizontal: 16, // Add some padding to the list
      },
  });
export default CountryListScreen;