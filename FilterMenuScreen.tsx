import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Picker } from '@react-native-picker/picker'; // Ensure this is correctly imported

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>;

const FilterMenuScreen: React.FC<FilterMenuScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>

      <Text style={styles.label}>Starters:</Text>
      <Picker selectedValue="All" style={styles.picker}>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Bruschetta" value="Bruschetta" />
        <Picker.Item label="Chili Poppers" value="Chili Poppers" />
      </Picker>

      <Text style={styles.label}>Mains:</Text>
      <Picker selectedValue="All" style={styles.picker}>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Prawn Pasta" value="Prawn Pasta" />
        <Picker.Item label="Steak Wrap" value="Steak Wrap" />
      </Picker>

      <Text style={styles.label}>Desserts:</Text>
      <Picker selectedValue="All" style={styles.picker}>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Cheesecake" value="Cheesecake" />
        <Picker.Item label="Tiramisu" value="Tiramisu" />
        <Picker.Item label="Malva Pudding" value="Malva Pudding" />
      </Picker>

      <Text style={styles.label}>Price:</Text>
      <Picker selectedValue="All" style={styles.picker}>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="$" value="$" />
        <Picker.Item label="$$" value="$$" />
        <Picker.Item label="$$$" value="$$$" />
      </Picker>

      <Text style={styles.label}>Food Type:</Text>
      <Picker selectedValue="Vegetarian" style={styles.picker}>
        <Picker.Item label="Vegetarian" value="Vegetarian" />
        <Picker.Item label="Vegan" value="Vegan" />
        <Picker.Item label="Gluten-Free" value="Gluten-Free" />
        <Picker.Item label="Meat-Based" value="Meat-Based" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    color: '#333',
    fontWeight: '600',
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
});

export default FilterMenuScreen;
