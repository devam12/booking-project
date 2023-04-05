import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { Platform } from 'react-native'
import { PixelRatio } from 'react-native'

const {width:SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH/360;

export function pixelNormalize(size){
    const newSize= size*scale;
    if(Platform.OS==='ios'){
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else{
        return Math.round(PixelRatio.roundToNearestPixel(newSize))-2;
    }
}
