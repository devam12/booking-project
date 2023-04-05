import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native';
import { Pressable } from 'react-native';

const UserScreen = () => {
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

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')

    return (
        <>
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'column', gap: 3 }}>
                    <Text>First Name</Text>
                    <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }} onChangeText={(text) => setfirstName(text)}></TextInput>
                </View>

                <View style={{ flexDirection: 'column', gap: 3, marginTop: 10 }}>
                    <Text>Last Name</Text>
                    <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }} onChangeText={(text) => setlastName(text)}></TextInput>
                </View>

                <View style={{ flexDirection: 'column', gap: 3, marginTop: 10 }}>
                    <Text>Email</Text>
                    <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }} onChangeText={(text) => setemail(text)}></TextInput>
                </View>

                <View style={{ flexDirection: 'column', gap: 3, marginTop: 10 }}>
                    <Text>Phone Number</Text>
                    <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }} onChangeText={(text) => setphoneNumber(text)}></TextInput>
                </View>
            </View>
            <Pressable style={{ backgroundColor: '#fff', padding: 8, marginBottom: 17, borderRadius: 3, marginHorizontal: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={styles.priceRow}>
                        <Text style={[styles.priceText, { color: 'red', textDecorationLine: 'line-through' }]}>Rs. {route.params.oldPrice * route.params.adults}</Text>
                        <Text style={[styles.priceText, { fontSize: 17 }]}>Rs. {route.params.newPrice * route.params.adults}</Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate('ConfirmationScreen', {
                        name: route.params.name,
                        oldPrice: route.params.oldPrice,
                        newPrice: route.params.newPrice,
                        availableRooms: route.params.availableRooms,
                        rooms: route.params.rooms,
                        adults: route.params.adults,
                        children: route.params.children,
                        rating: route.params.rating,
                        startDate: route.params.startDate,
                        endDate: route.params.endDate,
                        firstName:firstName,
                        lastName:lastName,
                        email:email,
                        phoneNumber:phoneNumber,

                    })} style={{ backgroundColor: '#007FFF',borderRadius:5, }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold',fontSize:12,padding:10}}>Final step to confirm</Text>
                    </Pressable>
                </View>
            </Pressable>
        </>
    )
}

export default UserScreen

const styles = StyleSheet.create({

    priceRow: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    lastLableRow: {
        backgroundColor: 'skyblue',
        borderRadius: 5,
        marginTop: 4,
        paddingVertical: 2,
        paddingHorizontal: 5,
    }
})