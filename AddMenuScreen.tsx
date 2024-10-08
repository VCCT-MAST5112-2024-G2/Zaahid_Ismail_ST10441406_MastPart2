import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const courses = ['Starters', 'Mains', 'Desserts'];

type AddMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'AddMenu'>;

export default function AddMenuScreen({ navigation }: AddMenuScreenProps) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    // Validate inputs
    if (!dishName || !description || !price) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      Alert.alert('Error', 'Please enter a valid price.');
      return;
    }

    const newItem = { dishName, description, course, price: priceValue, imageUrl: null }; // Add imageUrl if applicable
    navigation.navigate('Home', { newItem });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>

      <Text style={styles.label}>Dish Name:</Text>
      <TextInput style={styles.input} onChangeText={setDishName} value={dishName} />

      <Text style={styles.label}>Description:</Text>
      <TextInput style={styles.input} onChangeText={setDescription} value={description} />

      <Text style={styles.label}>Course:</Text>
      <Picker style={styles.picker} selectedValue={course} onValueChange={setCourse}>
        {courses.map((course) => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#800000',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 12,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#800000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
