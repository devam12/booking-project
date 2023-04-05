import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import PropertyCard from '../components/PropertyCard';
import { BottomModal, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';

const PlacesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      name: 'Ahmedabad',
      placeImage: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
      description: 'Ahmedabad description',
      properties: [
        {
          id: '1',
          name: 'Ahmedabad Pol',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '2',
          name: 'Ahmedabad Pol 2',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4KHfyVboayUA8qFLdI770UayO_UOgNc2bw&usqp=CAU','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '3',
          name: 'Ahmedabad Pol 3',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '4',
          name: 'Ahmedabad Pol 4',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
      ]
    },
    {
      id: 2,
      name: 'Delhi',
      placeImage: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
      description: 'Delhi description',
      properties: [
        {
          id: '1',
          name: 'Delhi pol',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '2',
          name: 'Delhi pol 2',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '3',
          name: 'Delhi pol 3',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '4',
          name: 'Delhi pol 4',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
      ]
    },
    {
      id: 3,
      name: 'Surat',
      placeImage: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
      description: 'Surat description',
      properties: [
        {
          id: '1',
          name: 'Ahmedabad Pol',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '2',
          name: 'Ahmedabad Pol 2',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '3',
          name: 'Ahmedabad Pol 3',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
        {
          id: '4',
          name: 'Ahmedabad Pol 4',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [1, 2],
        },
      ]
    },
    {
      id: 4,
      name: 'baroda',
      placeImage: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
      description: 'baroda description',
      properties: [
        {
          id: '1',
          name: 'Ahmedabad Pol',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [],
        },
        {
          id: '2',
          name: 'Ahmedabad Pol 2',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [],
        },
        {
          id: '3',
          name: 'Ahmedabad Pol 3',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [],
        },
        {
          id: '4',
          name: 'Ahmedabad Pol 4',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [],
        },
      ]
    },
    {
      id: 5,
      name: 'Jamnagar',
      placeImage: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
      description: 'Jamnagar description',
      properties: [
        {
          id: '1',
          name: 'Ahmedabad Pol',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
          ],
        },
        {
          id: '2',
          name: 'Ahmedabad Pol 2',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
          ],
        },
        {
          id: '3',
          name: 'Ahmedabad Pol 3',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
          ],
        },
        {
          id: '4',
          name: 'Ahmedabad Pol 4',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
          latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [
            {
              id: "205",
              bed : "1 bed",
              name : "Comnile bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "One bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Three bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
          ],
        },
      ]
    },
    {
      id: 6,
      name: 'mumbai',
      placeImage: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
      description: 'Ahmedabad description',
      properties: [
        {
          id: '1',
          name: 'Ahmedabad Pol',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4400,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4KHfyVboayUA8qFLdI770UayO_UOgNc2bw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4KHfyVboayUA8qFLdI770UayO_UOgNc2bw&usqp=CAU'],
          rooms: [
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
          ],
        },
        {
          id: '2',
          name: 'Ahmedabad Pol 2',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4600,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4KHfyVboayUA8qFLdI770UayO_UOgNc2bw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4KHfyVboayUA8qFLdI770UayO_UOgNc2bw&usqp=CAU'],
          rooms: [
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
          ],
        },
        {
          id: '3',
          name: 'Ahmedabad Pol 3',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4500,
           latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4KHfyVboayUA8qFLdI770UayO_UOgNc2bw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4KHfyVboayUA8qFLdI770UayO_UOgNc2bw&usqp=CAU'],
          rooms: [
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
          ],
        },
        {
          id: '4',
          name: 'Ahmedabad Pol 4',
          image: 'https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=',
          rating: 3.6,
          address: 'abc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyzabc xyz',
          oldPrice: 3600,
          newPrice: 4700,
          latitude: '23.0225',
          longitude:'72.5714',
          photos: ['https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA=','https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?b=1&s=170667a&w=0&k=20&c=pasR40JFdgY8EwJEuVRrb2FrhW3dZfugoknqsGluvEA='],
          rooms: [
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
            {
              id: "205",
              bed : "1 bed",
              name : "Two bedroom with balcony",
              payment : 'Pay at the property',
              refundable : "Refundable",
              size : 490,  
            },
          ],
        },
      ]
    },
  ]

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Cost : Low to High');
  const searchPlaces = data?.filter((item) => item.name === route.params.serachPlace)
  const [sortedData, setSortedData] = useState(data)


  const filters = [
    {
      id: 0,
      filter: 'Cost : Low to High',
    },
    {
      id: 1,
      filter: 'Cost : High to Low',
    },
  ]

  const highToLow = (a, b) => {
    if (a.newPrice > b.newPrice) {
      return -1;
    }

    if (a.newPrice < b.newPrice) {
      return 1;
    }

    return 0;
  }

  const lowToHigh = (a, b) => {
    if (a.newPrice < b.newPrice) {
      return -1;
    }

    if (a.newPrice > b.newPrice) {
      return 1;
    }

    return 0;
  }

  const applyFilter = (filter) => {
    setModalVisible(false);
    switch (filter) {
      case "Cost : High to Low":
        searchPlaces.map((val) => val.properties.sort(highToLow));
        setSortedData(searchPlaces);
        break;

      case "Cost : Low to High":
        searchPlaces.map((val) => val.properties.sort(lowToHigh));
        setSortedData(searchPlaces);
        break;
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
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

  }, [])

  return (
    <View>

      {/* Filter header menu */}
      <Pressable style={styles.topLine}>
        <Pressable style={styles.topLineMenu} onPress={() => setModalVisible(!modalVisible)} >
          <Octicons name="arrow-switch" size={20} color="gray" />
          <Text style={styles.topLineText}>Sort</Text>
        </Pressable>
        <Pressable style={styles.topLineMenu} >
          <MaterialCommunityIcons name="filter-variant" size={24} color="gray" />
          <Text style={styles.topLineText}>Filter</Text>
        </Pressable>
        <Pressable style={styles.topLineMenu} onPress={()=>navigation.navigate('MapScreen',{searchPlaces:searchPlaces})}>
          <FontAwesome name="map-marker" size={24} color="gray" />
          <Text style={styles.topLineText}>Map</Text>
        </Pressable>
      </Pressable>


      {/* SearchPlaces Item */}
      <ScrollView>
        {
          sortedData?.filter((item) => item.name === route.params.serachPlace)
          .map((item) =>
            item.properties.map((property, index) => {
              return <PropertyCard
                key={index}
                rooms={route.params.rooms}
                adults={route.params.adults}
                children={route.params.children}
                selectedDates={route.params.selectedDates}
                availableRooms={property.rooms}                
                property={property}
              />
            })
          )
        }
      </ScrollView>


      {/* Modal Footer */}
      <BottomModal
        swipeThreshold={200}
        footer={<ModalFooter>
          <Pressable style={{ paddingRight: 10, marginLeft: 'auto', marginRight: 'auto', marginVertical: 10 }}
            onPress={() => applyFilter(selectedFilter)}
          >
            <Text>Apply</Text>
          </Pressable>
        </ModalFooter>}
        modalTitle={<ModalTitle title='Sort & Filter'></ModalTitle>}
        modalAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
        onHardwareBackPress={() => { setModalVisible(!modalVisible) }}
        onTouchOutside={() => { setModalVisible(!modalVisible) }}
        visible={modalVisible}
      >

        <ModalContent style={{ width: '100%', height: 280 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 2, height: 280, borderRightWidth: 1, borderColor: '#E0E0E0', marginVertical: 10 }}>
              <Text>Sort</Text>
            </View>

            <View style={{ flex: 3, margin: 10 }}>
              {
                filters.map((item, index) => {
                  return (
                    <Pressable onPress={() => setSelectedFilter(item.filter)} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginBottom: 20, }} Key={index}>
                      {selectedFilter.includes(item.filter) ?
                        (<FontAwesome name="circle" size={18} color="green" />)
                        :
                        (<Entypo name="circle" size={18} color="black" />)
                      }
                      <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 7, alignItems: 'center' }}>{item.filter}</Text>
                    </Pressable>)
                }
                )
              }
            </View>
          </View>
        </ModalContent>
      </BottomModal>

    </View>
  )
}

export default PlacesScreen

const styles = StyleSheet.create({
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 45,
  },
  topLineMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLineText: {
    marginLeft: 7,
    fontWeight: 500,
    fontSize: 17,
  }
})