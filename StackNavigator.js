import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingScreen from './screens/BookingScreen';
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './screens/SearchScreen';
import PlacesScreen from './screens/PlacesScreen';
import BottumTab from './components/BottumTab';
import MapScreen from './screens/MapScreen';
import PropertyInfoScreen from './screens/PropertyInfoScreen';
import RoomScreen from './screens/RoomScreen';
import UserScreen from './screens/UserScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';


export default StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottumTab} options={{headerShown:false}}/>
                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>
                <Stack.Screen name="PlacesScreen" component={PlacesScreen}/>
                <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}}/>
                <Stack.Screen name="PropertyInfoScreen" component={PropertyInfoScreen}/>
                <Stack.Screen name="RoomScreen" component={RoomScreen}/>
                <Stack.Screen name="UserScreen" component={UserScreen}/>
                <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})