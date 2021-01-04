import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import {colors} from '../utils'

export default function Reload({load}) {
    return (
        <View style={styles.reloadIcon}> 
            <AntDesign name="reload1" size={24} color={colors.PRIMARY} onPress={load} />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon:{
        position:'absolute',
        right:120,
        top:150,
    }

})
