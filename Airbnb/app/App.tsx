// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { AuthProvider } from './AuthContext'; // Update this path
// import Profile from './(tabs)/profile'; // Import your Profile component

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthContext'; // Update this path
import Profile from './(tabs)/profile'; // Import your Profile component
import Login from '../app/(modals)/login'; // Import your Login component
import PropertyListings from '../components/Listings';
import PropertyDetailsScreen from '../components/ListingDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
   // <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="LoginScreen" component={Login} /> {/* Add Login screen */}
          {/* Other screens here */}
          <Stack.Screen name="PropertyListings" component={PropertyListings} options={{ title: 'PropertyListings' }} />
          <Stack.Screen name="Details" component={PropertyDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   // </AuthProvider>
  );
};

export default App;

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Profile" component={Profile} />
//           {/* Other screens here */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthProvider>
//   );
// };

// export default App;