import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import SearchResult from '../components/SearchResult'
import { useRoute } from '@react-navigation/native'

const SearchScreen = () => {
    const [search,setSearch] = useState('')

    const data=[
        {   
            id:1,
            name : 'Ahmedabad',
            placeImage:'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
            description:'Ahmedabad description',
        },
        {
            id:2,
            name : 'Delhi',
            placeImage:'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
            description:'Delhi description',
        },
        {
            id:3,
            name : 'Surat',
            placeImage:'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
            description:'Surat description',

        },
        {
            id:4,
            name : 'baroda',
            placeImage:'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
            description:'baroda description',
        },
        {
            id:5,
            name : 'Jamnagar',
            placeImage:'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
            description:'Jamnagar description',
        },
        {
            id:6,
            name : 'mumbai',
            placeImage:'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
            description:'Ahmedabad description',
        },
    ]
    return (<>
        <SafeAreaView>
            <View style={styles.main}>
                <Pressable style={styles.pressable}>
                    <TextInput style={styles.textinput} value={search} placeholder='Enter your Destination' onChangeText={(text)=>{setSearch(text)}}/>
                    <AntDesign name="search1" size={24} color="#003580" style={styles.serachicon} />
                </Pressable>
            </View>
        </SafeAreaView>
        <SearchResult data={data} search={search} setSearch={setSearch} ></SearchResult>
        </>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

    main: {
        margin: 10,
    },
    pressable: {
        flexDirection: 'row',
        borderRadius: 10,
        height: 50,
        borderWidth: 1,
        alignItems: 'center',
        marginTop:30,
    },
    textinput: {
        flex:7,
        marginHorizontal:10,
    },
    serachicon:{
        flex:1,
    },


})