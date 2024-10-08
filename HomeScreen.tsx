import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const BruschettaImage = require('../assets/bruschetta.jpg');
const PrawnPastaImage = require('../assets/pasta.jpg');
const CheesecakeImage = require('../assets/cheesecake.jpg');

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const initialItems = [
    { dishName: 'Bruschetta', description: 'Grilled bread with tomato and basil', course: 'Starters', price: 7.99, imageUrl: BruschettaImage },
    { dishName: 'Prawn Pasta', description: 'Pasta with prawns in a creamy sauce', course: 'Mains', price: 1.99, imageUrl: PrawnPastaImage },
    { dishName: 'Cheesecake', description: 'Creamy cheesecake', course: 'Desserts', price: 9.99, imageUrl: CheesecakeImage },
  ];

  const [menuItems, setMenuItems] = useState(initialItems);

  useEffect(() => {
    if (route.params?.newItem) {
      
      setMenuItems([route.params.newItem as { dishName: string; description: string; course: string; price: number; imageUrl: any }]);
    }
  }, [route.params?.newItem]);


  const additionalOptions = [
    { name: 'Chili Poppers', course: 'Starters' },
    { name: 'Nachos', course: 'Starters' },
    { name: 'Steak', course: 'Mains' },
    { name: 'Chili Cheese Chicken Wrap', course: 'Mains' },
    { name: 'Tiramisu', course: 'Desserts' },
    { name: 'Malva Pudding', course: 'Desserts' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Image source={item.imageUrl} style={styles.menuItemImage} />
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemText}>{item.dishName} - {item.course}</Text>
                <Text style={styles.menuItemText}>{item.description}</Text>
              </View>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          )}
        />

        
        <View style={styles.additionalOptionsContainer}>
          {additionalOptions.map((option, index) => (
            <Text key={index} style={styles.additionalOptionText}>
              {option.name} - {option.course}
            </Text>
          ))}
        </View>
      </View>

      
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('AddMenu')}>
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('FilterMenu')}>
          <Text style={styles.buttonText}>Filter Menu</Text>
        </TouchableOpacity>
        <Text style={styles.averagePriceText}>Average price of: [Pending]</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(128, 0, 0, 1)',
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  listContainer: {
    flex: 1, 
    width: '100%', 
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuItemText: {
    fontSize: 18,
    marginVertical: 2,
    color: '#333',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  additionalOptionsContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 8,
  },
  additionalOptionText: {
    fontSize: 14,
    color: '#333',
  },
  bottomMenu: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30, 
  },
  bottomButton: {
    backgroundColor: '#ffb3b3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(128, 0, 0, 1)',
    fontSize: 18,
    fontWeight: '600',
  },
  averagePriceText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
});
