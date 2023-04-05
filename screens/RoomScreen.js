import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Amenities from '../components/Amenities';

const RoomScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [selected, setSelected] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: 'Available Rooms',
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
        <>
            <ScrollView>
                {
                    route.params.availableRooms.map((item, index) => (
                        <Pressable style={{ margin: 10, backgroundColor: "#fff", padding: 10 }} key={index}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#007FFF' }}>{item.name}</Text>
                                <AntDesign name="infocirlce" size={24} color="black" />
                            </View>
                            <Text style={{ marginTop: 3 }}>Pay at the Property</Text>
                            <Text style={{ marginTop: 3, color: 'green', fontSize: 15 }}>Free Cancletion Available</Text>
                            <View style={styles.priceRow}>
                                <Text style={[styles.priceText, { color: 'red', textDecorationLine: 'line-through' }]}>Rs. {route.params.oldPrice * route.params.adults}</Text>
                                <Text style={[styles.priceText, { fontSize: 17 }]}>Rs. {route.params.newPrice * route.params.adults}</Text>
                            </View>
                            <Amenities />

                            {
                                selected.includes(item.name) ?
                                    <Pressable style={{ borderColor: '#378CE7', backgroundColor: '#F0F8FF', borderWidth: 2, borderRadius: 5, padding: 10, flexDirection: 'row', alignItems: 'center' }} onPress={() => setSelected([])}>
                                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: '#007FFF', flex: 4 }}>Selected</Text>
                                        <Entypo name="circle-with-cross" size={24} color="red" />
                                    </Pressable>
                                    :
                                    <Pressable style={{ borderColor: '#007FFF', borderWidth: 2, borderRadius: 5, padding: 10 }} onPress={() => setSelected(item.name)}>
                                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: '#007FFF' }}>Select</Text>
                                    </Pressable>
                            }


                        </Pressable>
                    ))
                }
            </ScrollView>

            { selected.length > 0 ? 
                (
                    <Pressable onPress={()=>navigation.navigate('UserScreen',{
                        name: route.params.name,
                        oldPrice: route.params.oldPrice,
                        newPrice: route.params.newPrice,
                        selectedRooms : selected,
                        rooms: route.params.rooms,
                        adults: route.params.adults,
                        children: route.params.children,
                        rating: route.params.rating,
                        startDate: route.params.startDate,
                        endDate: route.params.endDate,
                        key: route.params.key,

                    })} style={{backgroundColor:'#007FFF', padding:8,marginBottom:17,borderRadius:3,marginHorizontal:15}}>
                        <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>Reserve</Text>
                    </Pressable>
                )
                :
                (
                    null
                )
            }
        </>
    )
}

export default RoomScreen

const styles = StyleSheet.create({

    priceRow: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
})