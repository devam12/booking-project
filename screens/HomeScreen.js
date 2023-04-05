import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header';
import DatePicker from 'react-native-date-ranges';
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';



const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [selectedDates, setSelectedDates] = useState({"endDate": "2023/04/27", "startDate": "2023/04/20"});
  const [modalVisible, setModalVisible] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(3);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#003580',
      },
      headerRight: () => {
        return <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 15 }} />
      },
    })
    return () => {
    };
  }, [])

  const cutomeButton = (onConfirm) => {
    return (
      <Button onPress={onConfirm}
        style={{ container: { marginHorizontal: '3%' }, text: { fontSize: 20 }, }}
        primary
        title='Submit'
      ></Button>
    )
  }

  const searchPlaces = (serachPlace)=>{
    if(!route.params || !selectedDates){
      Alert.alert('Invalid Details', 'Please Enter All Details', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    if(route.params && selectedDates){
      navigation.navigate("PlacesScreen",{
        rooms:rooms,
        adults:adults,
        children:children,
        selectedDates:selectedDates,
        serachPlace : serachPlace,
      })
    }
  }

  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View style={styles.main}>
            {/* Destination */}
            <Pressable style={styles.pressable} onPress={()=>navigation.navigate("SearchScreen")}>
              <AntDesign name="search1" size={24} color="#003580" />
              <TextInput contextMenuHidden={true} style={styles.textinput} placeholder={route?.params ? route.params.search : 'Search Destination'} />
            </Pressable>

            {/* Selected Dates */}
            <Pressable style={styles.pressable}>
              <FontAwesome name="calendar" size={24} color="#003580" />
              <DatePicker
                style={{ width: 275, height: 33, borderWidth: 0, borderRadius: 0, marginLeft: 6, fontSize: 20 }}
                customStyles={{
                  headerStyle: {
                    backgroundColor: '#003580'
                  },
                }}
                customButton={(onConfirm) => cutomeButton(onConfirm)}
                onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
                placeholder={'Select Your Dates'}
                allowFontScaling={false} // optional
                mode={'range'}
              />
            </Pressable>

            {/* Roomes */}
            <Pressable style={styles.pressable} onPress={() => { setModalVisible(!modalVisible) }}>
              <Ionicons name="ios-person" size={24} color="#003580" />
              <TextInput placeholder={`${rooms} Room ${adults} Adults ${children} Children `} style={{ marginLeft: 10 }} placeholderTextColor='red' onPress={() => { setModalVisible(!modalVisible) }}></TextInput>
            </Pressable>

            {/* Search Button */}
            <Pressable style={styles.serachButton} onPress={()=>searchPlaces(route?.params.search)}>
              <Text style={{ color: '#fff', }}>Search</Text>
            </Pressable>
          </View>

          {/* <Text style={{ marginHorizontal: 20, fontSize: 17, fontWeight: '500' }}>Travel More Spend Less</Text> */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable style={{ height: 130, width: 150, marginLeft: 15, marginTop: 10, backgroundColor: '#003580', borderRadius: 20 , padding:15}}>
                <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',marginVertical:4}}>Genius</Text>
                <Text style={{color:'#fff'}}>You are at genius level one loyalty program </Text>
            </Pressable>

            <Pressable style={{ height: 130, width: 150, marginLeft: 15, marginTop: 10, backgroundColor: '#fff', borderRadius: 20 , padding:15}}>
                <Text style={{color:'#003580',fontSize:15,fontWeight:'bold',marginVertical:4}}>10% Discount</Text>
                <Text style={{color:'#003580'}}>You are at genius level one loyalty program </Text>
            </Pressable>
          </ScrollView>

          <Pressable style={{marginTop:20,marginBottom:80}}>
            <View style={{flexDirection:'row',justifyContent:'center'}}><Text style={{fontSize:25,color:'#003580',fontWeight:'bold'}}>Booking</Text><Text color='white' style={{fontSize:20,paddingTop:5,color:'skyblue',fontWeight:'bold'}}>.com</Text></View>
          </Pressable>
        </ScrollView>
      </View>


      <BottomModal swipeThreshold={200}
        onBackdropPress={() => { setModalVisible(!modalVisible) }}
        swipeDirection={['up', 'down']}
        footer={<ModalFooter >
          <ModalButton text='Apply' style={{ marginBottom: 20, Color: 'white', backgroundColor: '#003580' }} onPress={() => { setModalVisible(!modalVisible) }}></ModalButton>
        </ModalFooter>}
        modalTitle={<ModalTitle title='Select Rooms'></ModalTitle>}
        modalAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
        onHardwareBackPress={() => { setModalVisible(!modalVisible) }}
        onTouchOutside={() => { setModalVisible(!modalVisible) }}
        visible={modalVisible}
      >
        <ModalContent style={{ width: '100%', height: 310 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15, }}>
            <Text>Rooms</Text>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13, backgroundColor: 'gray' }} onPress={() => setRooms(Math.max(1, rooms - 1))}><Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 0, }}>-</Text></Pressable>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13 }}><Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>{rooms}</Text></Pressable>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13, backgroundColor: 'gray' }} onPress={() => setRooms(rooms + 1)}><Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 0, }}>+</Text></Pressable>
            </Pressable>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15, }}>
            <Text>Adults</Text>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13, backgroundColor: 'gray' }} onPress={() => setAdults(Math.max(0, adults - 1))}><Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 0, }}>-</Text></Pressable>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13 }}><Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>{adults}</Text></Pressable>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13, backgroundColor: 'gray' }} onPress={() => setAdults(adults + 1)}><Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 0, }}>+</Text></Pressable>
            </Pressable>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15, }}>
            <Text>Children</Text>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13, backgroundColor: 'gray' }} onPress={() => setChildren(Math.max(0, children - 1))}><Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 0, }}>-</Text></Pressable>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13 }}><Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>{children}</Text></Pressable>
              <Pressable style={{ width: 26, height: 26, borderColor: '#003580', borderRadius: 13, backgroundColor: 'gray' }} onPress={() => setChildren(children + 1)}><Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 0, }}>+</Text></Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>

    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  pressable: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    margin: 6,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 11,
  },
  textinput: {
    marginRight: 11,
    marginLeft: 10,
  },
  serachButton: {
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    backgroundColor: '#003580',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 11,
  }
})