import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



const Header = () => {
    return (
        <View style={styles.header}>
            <Pressable style={[styles.pressable,{borderColor:'#fff',borderWidth:2,borderRadius:20,paddingLeft:8,paddingRight:8,padding:5}]}>
                <Ionicons name="bed-outline" size={20} color="#fff" />
                <Text style={styles.text}>Stays</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
            <Ionicons name="airplane-outline" size={20} color="#fff" />
                <Text style={styles.text}>Flight</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
            <Ionicons name="car-outline"  size={20} color="#fff" />
                <Text style={styles.text}>Car Rent</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
            <FontAwesome5 name="uber" size={18}  color="#fff" />
                <Text style={styles.text}>Texi</Text>
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#003580',
        alignItems: 'center',
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    pressable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        marginLeft:4,
        fontWeight:'bold',
        color:'white',
        fontSize:15
    }
})