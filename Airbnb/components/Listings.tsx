import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const PropertyListings = () => {

  const navigation = useNavigation();

  // Define a type/interface for the property object
interface Property {
  id: number;
  image: string;
  title: string;
  bio: string;
  rating: number;
  costPerNight: string;
  // Add other properties in your property object
}

  // Sample property data (you can replace this with your own data)
  const propertyList: Property[] = [
    {
      id: 1,
      image: 'https://fastly.picsum.photos/id/144/4912/2760.jpg?hmac=pMOciMOb_baom6Llz91g42ZAqJP7Gi2Y1AfA37zfh_s',
      title: 'Beautiful Beach House',
      bio: 'Enjoy a relaxing stay by the beach.',
      rating: 4.5,
      costPerNight: '$150',
    },
    {
      id: 2,
      image: 'https://fastly.picsum.photos/id/230/1500/1500.jpg?hmac=heg53PqHqX88fhXrDyqlqJK8lLJXGRudsOXMKB3BZtc',
      title: 'Cozy Mountain Cabin',
      bio: 'Escape to the mountains in this cozy cabin.',
      rating: 4.8,
      costPerNight: '$120',
      
    },
    {
      id: 3,
      image: 'https://fastly.picsum.photos/id/311/1000/563.jpg?hmac=M6WX06qTw-1eQj4z12Zh-NPeJnll-6a_yx9CbNnRPHs',
      title: 'Rustic Old Town Home',
      bio: 'Escape to the chivalry age.',
      rating: 2.8,
      costPerNight: '$55',

    },
    {
      id: 4,
      image: 'https://fastly.picsum.photos/id/437/4128/2716.jpg?hmac=j6COqB2RtRcMa56wHOd4qZbRPIUmjWrV_Ax73-tP_go',
      title: 'San Fransico Town Building',
      bio: 'Escape to the homeland.',
      rating: 4.9,
      costPerNight: '$169',
    }
    // Add more properties as needed
  ];


  const handlePropertyClick = (property: Property) => {
    // Log the clicked property to the console
    navigation.navigate('Details', { property });   //could not get this to work
    
    console.log('Clicked Property:', property);
  };

  return (
    <View style={styles.container}>
    {propertyList.map(property => (
      <TouchableOpacity key={property.id} onPress={() => handlePropertyClick(property)}>
        <View key={property.id} style={styles.propertyContainer}>
          <Image source={{ uri: property.image }} style={styles.image} />
          <Text style={styles.title}>{property.title}</Text>
          <Text style={styles.bio}>{property.bio}</Text>
          <Text style={styles.rating}>Rating: {property.rating}</Text>
          <Text style={styles.cost}>Cost per night: {property.costPerNight}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  propertyContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    marginBottom: 5,
  },
  rating: {
    marginBottom: 5,
  },
  cost: {
    fontWeight: 'bold',
  },
});

export default PropertyListings;