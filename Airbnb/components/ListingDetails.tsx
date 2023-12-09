import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'; // Import Firestore from Firebase

interface Property {
  id: number;
  image: string;
  title: string;
  bio: string;
  rating: number;
  costPerNight: string;
  // Add other properties in your property object
}

const PropertyDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { property } = route.params as { property: Property };

  const handleReserve = async () => {
    // Replace this with the logic to save the property to Firestore for the logged-in user
    try {
      // Access Firestore and add the property to the user's trips collection
      await firestore()
        .collection('users') // Replace 'users' with your users collection name
        .doc('loggedInUserId') // Replace 'loggedInUserId' with the actual user ID
        .collection('trips') // Collection name for user's trips
        .add(property); // Add the property to the trips collection
    } catch (error) {
      console.error('Error saving property to trips:', error);
    }
  };

  return (
    <View>
      {/* Back arrow at the top left */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>

      {/* Display enlarged property details */}
      <Text>{property.title}</Text>
      {/* Display other property details */}

      {/* Reserve button */}
      <TouchableOpacity onPress={handleReserve}>
        <Text>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PropertyDetailsScreen;