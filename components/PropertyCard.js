import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const PropertyCard = ({ rooms, adults, children, selectedDates, availableRooms, property }) => {
    
    const navigation = useNavigation();
    return (
        <View>
            <Pressable style={styles.placeCard}
            onPress={()=>{ navigation.navigate('PropertyInfoScreen',{
                name:property.name,
                rating : property.rating,
                oldPrice :property.oldPrice,
                newPrice:property.newPrice,
                photos :property.photos,
                availableRooms : availableRooms,
                adults:adults,
                rooms:rooms,
                children:children,
                selectedDates:selectedDates,
                key:property,    
            })}}
            key={property}
            >
                <View>
                    <Image style={{ height: height/(5/2)-10, width: width - 230 }} source={{ uri: property.image }}></Image>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.nameTextRow}>
                        <Text style={styles.nameText}>{property.name}</Text>
                        <AntDesign name="hearto" size={24} color="black" />
                    </View>

                    <View style={styles.starTextRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flex: 1 }}>
                            <MaterialIcons name="stars" size={24} color="black" />
                            <Text style={styles.nameText}>{property.rating}</Text>
                        </View>
                        <View style={styles.lableRating}><Text style={{fontSize:11}}>Genius Level</Text></View>
                    </View>

                    <View style={styles.addressTextRow}><Text>{property.address.length > 50 ? property.address.substr(0, 50) : property.address}</Text></View>
                
                    <View style={{marginTop:5,fontWeight:500,}}><Text style={{fontSize:12}}>Price for 1 night and {adults} adults</Text></View>
                    
                    <View style={styles.priceRow}>
                        <Text style={[styles.priceText,{color:'red',textDecorationLine:'line-through'}]}>Rs. {property.oldPrice * adults}</Text>
                        <Text style={[styles.priceText,{fontSize:17}]}>Rs. {property.newPrice * adults}</Text>
                    </View>

                    <View style={styles.roomRow}>
                        <Text style={{fontSize:14,fontWeight:'bold'}}>Delux Room</Text>
                        <Text style={{fontSize:14,fontWeight:'bold'}}>Hotel Room</Text>
                    </View>

                    <View style={styles.lastLableRow}><Text style={{textAlign:'center'}}>Limited Time Deal</Text></View>

                </View>
            </Pressable>
        </View>
    )
}

export default PropertyCard

const styles = StyleSheet.create({

    placeCard: {
        flexDirection: 'row',
        margin: 15,
        backgroundColor: '#fff',
    },
    detailsContainer: {
        padding: 10,
        flex: 1,
        marginRight: 2,
    },
    nameTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
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
    nameText: {
        fontWeight: 'bold',
    },
    addressTextRow: {
        width: '100%',
        marginTop: 4,
    },
    priceRow:{
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap:12,
    },
    priceText:{
        fontWeight:'bold',
        fontSize:15,
        alignItems:'center',
    },
    roomRow:{
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
    },
    lastLableRow:{
        backgroundColor: 'skyblue',
        borderRadius: 5,
        marginTop:4,
        paddingVertical: 2,
        paddingHorizontal: 5,
    }

})