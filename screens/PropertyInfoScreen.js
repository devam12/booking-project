import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { pixelNormalize } from '../components/Normalise';
import { MaterialIcons } from '@expo/vector-icons';
import Amenities from '../components/Amenities';

const PropertyInfoScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: `${route.params.name}`,
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

    return (
        <SafeAreaView>
            <ScrollView>
                <Pressable style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    {
                        route.params.photos.slice(0, 5).map((photo) => (
                            <>
                                <View style={{ margin: 6 }}>
                                    <Image style={{ width: pixelNormalize(110), height: pixelNormalize(80), borderRadius: pixelNormalize(10) }} source={{ uri: photo }} />
                                </View>
                            </>
                        ))
                    }
                    <Pressable style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, textAlign: 'center' }}>Show More</Text>
                    </Pressable>
                </Pressable>


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
                            {route.params.selectedDates.startDate}
                        </Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
                            Check Out
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#007FFF' }}>
                            {route.params.selectedDates.endDate}
                        </Text>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 5, flexDirection: 'row', alignItems: 'center', gap: 60, }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
                            Rooms and Guests
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#007FFF' }}>
                            {route.params.rooms} Rooms {route.params.adults} Adults {route.params.children} Children
                        </Text>
                    </View>
                </View>

                <Text style={{ borderColor: '#E0E0E0', borderWidth: 3, height: 1, marginTop: 15 }}></Text>

                <Amenities />

                <Text style={{ borderColor: '#E0E0E0', borderWidth: 3, height: 1, marginTop: 15 }}></Text>

            </ScrollView>

            <Pressable style={{
                backgroundColor: '#6CB4EE',
                bottom: 5,
                padding: 15,
                width: '95%',
                marginHorizontal: 10,
                position: 'absolute',
            }} onPress={() => {
                navigation.navigate('RoomScreen', {
                    name: route.params.name,
                    oldPrice: route.params.oldPrice,
                    newPrice: route.params.newPrice,
                    availableRooms: route.params.availableRooms,
                    rooms: route.params.rooms,
                    adults: route.params.adults,
                    children: route.params.children,
                    rating: route.params.rating,
                    startDate: route.params.selectedDates.startDate,
                    endDate: route.params.selectedDates.endDate,
                    key: route.params.key,
                })
            }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Select Availabilty</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default PropertyInfoScreen

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