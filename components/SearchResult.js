import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SearchResult = (props) => {
    const { data, search, setSearch } = props;
    const navigation = useNavigation();
    return (
        <View>
            <FlatList data={data} renderItem={({ item }) => {
                if (item.name.toLowerCase().includes(search.toLowerCase())) {
                    if (search === '') {
                        return ( 
                            <Pressable style={styles.pressable} onPress={()=>{ 
                                setSearch(item.name);
                                navigation.navigate('Home', {search : item.name});
                            }}>
                                <View style={{ height: 70, width: 150 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                                        <Text style={{ fontSize: 20, color: '#003580', fontWeight: 'bold' }}>Booking</Text><Text color='white' style={{ fontSize: 15, paddingTop: 5, color: 'skyblue', fontWeight: 'bold' }}>.com</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{item.description}</Text>
                                </View>
                            </Pressable>
                        )
                    }
                    return (
                        <Pressable style={styles.pressable} onPress={()=>{ 
                            setSearch(item.name);
                            navigation.navigate('Home', {search : item.name});
                        }}>
                            <View style={{ height: 70, width: 150 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                                    <Text style={{ fontSize: 20, color: '#003580', fontWeight: 'bold' }}>Booking</Text><Text color='white' style={{ fontSize: 15, paddingTop: 5, color: 'skyblue', fontWeight: 'bold' }}>.com</Text>
                                </View>
                            </View>
                            <View>
                                <Text>{item.name}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        </Pressable>
                    )
                }
            }}>
            </FlatList>
        </View>
    )
}

export default SearchResult

const styles = StyleSheet.create({

    pressable: {
        flexDirection: 'row',
    }
})