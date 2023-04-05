import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Amenities = () => {
    const services = [
        {
            id: '0',
            name: 'Free Wifi'
        },
        {
            id: '1',
            name: 'Room services'
        },
        {
            id: '2',
            name: 'Free Parking'

        },
        {
            id: '3',
            name: 'Free Family Rooms'

        },
        {
            id: '4',
            name: 'Swimming Pool'
        },
        {
            id: '5',
            name: 'Restaurant'
        },
        {
            id: '6',
            name: 'Fitness center'
        },
    ]
    return (
        <View style={{  marginTop: 7, paddingBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', marginBottom: 3 }}>
                Most Popular Facilities
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
                {
                    services.map((item, index) => (
                        <View key={index} style={{ margin: 5, backgroundColor: '#007FFF', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 15 }}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>{item.name}</Text>
                        </View>
                    ))
                }

            </View>
        </View>
    )
}

export default Amenities

const styles = StyleSheet.create({})