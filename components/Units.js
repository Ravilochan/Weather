import React from 'react'
import { View, StyleSheet, Platform} from 'react-native'
import { Picker }from '@react-native-community/picker'
export default function Units({units,setUnits}) {
    return (
        <View style={styles.unitSystem} >
            <Picker selectedValue={units} onValueChange={(item)=> setUnits(item)}>
                <Picker.Item label="C" value="metric" />

                <Picker.Item label="F" value="imperial" />

                <Picker.Item label="K" value="standard" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitSystem:{
        position:'absolute',
        top:50,
        height:50,
        width:100,
        left:110,
    },
})