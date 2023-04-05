
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import MapView, {Marker} from 'react-native-maps'
import { Pressable } from 'react-native'

const MapScreen = () => {
    const route = useRoute();
    const mapViewRef = useRef(null);
    console.log(route.params);
    const coordinates = [];
    const details  = route.params.searchPlaces.map((item)=>item.properties?.map((props)=>{
        coordinates.push({
            latitude:Number(props.latitude),
            longitude:Number(props.longitude),
        })
    }));

    useEffect(()=>{
        mapViewRef.current.fitToCoordinates(coordinates,{
            edgePadding:{
                top:190,
                left:190,
                bottom:190,
                right:190,
            }
        })
    },[])
    return (
        <SafeAreaView>
            <MapView ref={mapViewRef}
                style={{ height: 620, width: 360 }}
            >
                {
                    route.params.searchPlaces.map((item) =>
                        item.properties.map((property) =>
                            <Marker
                                title={property.name}
                                coordinate={{
                                    latitude: Number(property.latitude),
                                    longitude: Number(property.longitude),
                                }}
                            >
                                <Pressable
                                    style={{
                                        backgroundColor:'#003580',
                                        paddingHorizontal : 7,
                                        paddingVertical:4,
                                        borderRadius:4,
                                    }}>

                                        <Text style={{fontSize:15,color:'white', textAlign:'center',fontWeight:'bold'}}>{property.newPrice}</Text>
                                    </Pressable>


                            </Marker>)
                    )
                }
            </MapView>

        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({})