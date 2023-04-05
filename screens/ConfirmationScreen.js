import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import SavedScreen from './SavedScreen';
import { savedPlaces } from '../SavedReducer';

const ConfirmationScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: 'User Details',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: 'white',
            },
            headerStyle: {
                height: 110,
                backgroundColor: '#003580',
            },
        })

    }, [])

    const dispatch = useDispatch()
    const confirmBooking = ()=>{
        dispatch(savedPlaces(route.params));
        navigation.navigate('Main')
    }

    return (
        <View style={{backgroundColor:'white',margin:6,borderRadius:15}}>
            {/* Name */}
            <View style={{ marginHorizontal: 12 }}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.name}</Text>
                    <View style={styles.starTextRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <MaterialIcons name="stars" size={24} color="green" />
                            <Text style={{ fontWeight: 'bold', }}>{route.params.rating}</Text>
                            <View style={styles.lableRating}><Text style={{ fontSize: 11 }}>Genius Level</Text></View>
                        </View>
                    </View>
                </View>
            </View>

            <Text style={{ borderColor: '#E0E0E0', borderWidth: 3, height: 1, marginTop: 15 }}></Text>


            <View style={{ marginHorizontal: 12, marginTop: 7 }}>
                <View style={{ marginTop: 5, fontWeight: 500, }}><Text style={{ fontSize: 15 }}>Price for 1 night and {route.params.adults} adults</Text></View>
                <View style={styles.priceRow}>
                    <Text style={[styles.priceText, { color: 'red', textDecorationLine: 'line-through' }]}>Rs. {route.params.oldPrice * route.params.adults}</Text>
                    <Text style={[styles.priceText, { fontSize: 17 }]}>Rs. {route.params.newPrice * route.params.adults}</Text>
                </View>
            </View>

            <Text style={{ borderColor: '#E0E0E0', borderWidth: 3, height: 1, marginTop: 15 }}></Text>


            <View style={{ marginHorizontal: 12, marginTop: 7, flexDirection: 'row', alignItems: 'center', gap: 60, }}>
                <View style={{}}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
                        Check In
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#007FFF' }}>
                        {route.params.startDate}
                    </Text>
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
                        Check Out
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#007FFF' }}>
                        {route.params.endDate}
                    </Text>
                </View>
            </View>

            <Text style={{ borderColor: '#E0E0E0', borderWidth: 3, height: 1, marginTop: 15 }}></Text>

            <View style={{ marginHorizontal: 10, marginVertical: 5, flexDirection: 'row', alignItems: 'center', gap: 60, }}>
                <View style={{}}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
                        Rooms and Guests
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#007FFF' }}>
                        {route.params.rooms} Rooms {route.params.adults} Adults {route.params.children} Children
                    </Text>
                </View>
            </View>

            <Pressable onPress={confirmBooking}  style={{marginVertical:10,marginHorizontal:7,paddingVertical:12,backgroundColor:'#003580',borderRadius:10,paddingHorizontal:10}}>
                <Text style={{textAlign:'center',alignItems:'center',color:'white'}}>Book Hotel</Text>
            </Pressable>

        </View>
    )
}

export default ConfirmationScreen

const styles = StyleSheet.create({
    starTextRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        marginTop: 4,
    },
    lableRating: {
        backgroundColor: 'skyblue',
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    priceRow: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 15,
        alignItems: 'center',
    },
})