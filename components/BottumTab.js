import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import BookingScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const BottumTab =()=>{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>  focused ? (<Entypo name="home" size={24} color="#003580" />) : (<AntDesign name="home" size={24} color="#003580" />) ,
                    }} />

            <Tab.Screen name="Saved"
                component={SavedScreen}
                options={
                    {
                        tabBarLabel: 'Saved',
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>  focused ? (<AntDesign name="heart" size={24} color="#003580" />) : (<FontAwesome5 name="heart" size={24} color="#003580" />) ,

                    }} />

            <Tab.Screen name="Booking"
                component={BookingScreen}
                options={
                    {
                        tabBarLabel: 'Booking',
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>  focused ? (<Ionicons name="notifications" size={24} color="#003580" />) : (<Ionicons name="notifications-outline" size={24} color="#003580" />) ,

                    }} />

            <Tab.Screen name="Profile"
                component={ProfileScreen}
                options={
                    {
                        tabBarLabel: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>  focused ? (<Ionicons name="person-circle" size={24} color="#003580" />) : (<Ionicons name="person-circle-outline" size={24} color="#003580" />) ,

                    }} />
        </Tab.Navigator>
    )
}

export default BottumTab

const styles = StyleSheet.create({})