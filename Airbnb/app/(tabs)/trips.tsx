import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore'; // Import Firestore

const Trips = () => {
  const [userTrips, setUserTrips] = useState<any[]>([]); // State to store user's trips

  useEffect(() => {
    // Function to fetch user's trips from Firestore
    const fetchUserTrips = async () => {
      try {
        // Replace 'loggedInUserId' with the actual logged-in user's ID
        const userId = 'loggedInUserId'; // Replace with actual user ID
        const tripsRef = firestore()
          .collection('users')
          .doc(userId)
          .collection('trips');

        const snapshot = await tripsRef.get();

        const tripsData: any[] = [];
        snapshot.forEach((doc) => {
          tripsData.push({ id: doc.id, ...doc.data() });
        });

        setUserTrips(tripsData);
      } catch (error) {
        console.error('Error fetching user trips:', error);
      }
    };

    fetchUserTrips(); // Fetch user's trips on component mount
  }, []); // Run this effect only once on component mount

  return (
    <View>
      <Text>User Trips:</Text>
      <FlatList
        data={userTrips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            {/* Display trip details */}
            <Text>Title: {item.title}</Text>
            <Text>Cost: {item.costPerNight}</Text>
            {/* Display other trip details */}
          </View>
        )}
      />
    </View>
  );
};

export default Trips;
