
import React from "react"
import { Tabs } from 'expo-router';
import Colors from "../../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Layout = () => {
    return (
      <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary
      }}>
        <Tabs.Screen name="explore" options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size}) => 
            <FontAwesome name="search" size={size} color={color} />
            }} />
        <Tabs.Screen name="wishlist" options={{
            tabBarLabel: 'Wishlists',
            tabBarIcon: ({ color, size}) => 
            <FontAwesome name="heart" size={size} color={color} />
            }} />     
        <Tabs.Screen name="trips" options={{
          tabBarLabel: 'trips',
          tabBarIcon: ({ color, size}) => 
          <FontAwesome5 name="airbnb" size={size} color={color}/>
        }} />
        <Tabs.Screen name="inbox" options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size}) => 
          <Feather name="message-square" size={size} color={color}/>
        }} />
        <Tabs.Screen name="profile" options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size}) => 
          <FontAwesome name="user-circle-o" size={size} color={color}/>
        }} />

      </Tabs>
    )
}

export default Layout;