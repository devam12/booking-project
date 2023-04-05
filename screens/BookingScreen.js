import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const BookingScreen = () => {

  const bookings = useSelector((state) => state.booking.booking)

  return (
    <SafeAreaView>
      <ScrollView>
        {
          bookings.map((booking) => {
            return <>
              <View style={styles.detailsContainer}>
                <View style={styles.nameTextRow}>
                  <Text style={styles.nameText}>{bookings.name}</Text>
                </View>

                <View style={styles.starTextRow}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flex: 1 }}>
                    <MaterialIcons name="stars" size={24} color="black" />
                    <Text style={styles.nameText}>{booking.rating}</Text>
                  </View>
                </View>

                <View style={{ marginTop: 5, fontWeight: 500, }}><Text style={{ fontSize: 12 }}>Price for 1 night and {booking.adults} adults</Text></View>

                <View style={styles.priceRow}>
                  <Text style={[styles.priceText, { color: 'red', textDecorationLine: 'line-through' }]}>Rs. {booking.oldPrice * booking.adults}</Text>
                  <Text style={[styles.priceText, { fontSize: 17 }]}>Rs. {booking.newPrice * booking.adults}</Text>
                </View>
              </View></>
          }
          )
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookingScreen

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
    backgroundColor: 'skyblue',
    margin: 10,
    borderRadius: 10,
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
  roomRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  lastLableRow: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    marginTop: 4,
    paddingVertical: 2,
    paddingHorizontal: 5,
  }

})