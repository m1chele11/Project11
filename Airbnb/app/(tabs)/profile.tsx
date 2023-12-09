import React ,{useState}from 'react';
import { Link } from 'expo-router'
import { View, TouchableOpacity, Text, StyleSheet, Button, Image} from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../AuthContext'; 

import Login from '../(modals)/login'; // Import your Login component




// const Profile = () => {
//   const navigation = useNavigation(); // Use navigation hook if using React Navigation
//   const { user, signOut } = useAuth(); // Use authentication context or hooks

//   // const handleLogin = () => {
//   //   // Logic to handle the login action (navigate to login screen, open modal, etc.)
//   //   // Example: navigation.navigate('Login');
//   //   //navigation.navigate('LoginScreen'); // Navigate to the 'Login' screen
    
//   // };

//   return (
//     <View style={styles.container}>
//       {user ? ( // If user is logged in, display user profile details
//         <>
//           <Image source={{ uri: user.photoURL }} style={styles.profileImage} />
//           <Text>Name: {user.displayName}</Text>
//           <Text>Email: {user.email}</Text>
//           {/* Other user details */}
//           <Button title="Logout" onPress={signOut} />
//         </>
//       ) : (
//         // If user is not logged in, show the login button
//         // <Button title="Login" onPress={handleLogin} />
//         <Login />
        
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   loginLink: {
//         backgroundColor: 'pink',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 20,
//       },
 
// });

// export default Profile;


const Profile = () => {
  const navigation = useNavigation(); // Use navigation hook if using React Navigation
  const { user, signOut } = useAuth()
  const [loggedIn,setLoggedIn]=useState('False')

  let isSignedIN = false;

  return (
    <View style={styles.container}>
      {user && loggedIn ? ( // If user is logged in, display user profile details
        <>
          <Text>Name: {user.displayName}</Text>
          <Text>Email: {user.email}</Text>
          {/* Other user details */}
          <Button title="Logout" onPress={signOut} />
        </>
      ) : (
        // If user is not logged in, show the login button
        // <Button title="Login" onPress={handleLogin} />
       // <Login />
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Link href={'/(modals)/login'} style={styles.loginLink} >
          <Text style={styles.buttonText}>Login</Text>
        </Link>
        {/* <Login onClick ></Login> */}
      </View>
    </View>
        
      )}
     </View>
       );
      };
    
    // <View style={styles.container}>
    //   <View style={styles.buttonContainer}>
    //     <Link href={'/(modals)/login'} style={styles.loginLink}>
    //       <Text style={styles.buttonText}>Login</Text>
    //     </Link>
    //   </View>
    // </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  loginLink: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;