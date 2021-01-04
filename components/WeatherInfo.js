import React from 'react'
import { View, Text , StyleSheet, Image } from 'react-native'
import {colors} from '../utils'

const {PRIMARY,SECONDARY} = colors
export default function WeatherInfo({currentWeather}) {
    const { main: {temp},
            weather : [details],
            name,
        } = currentWeather
    const {icon , main , description } = details
    const iconurl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{uri: iconurl}} />
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    weatherInfo:{
        alignItems:'center',
        marginTop:100,
    },
    weatherIcon:{
        width:100,
        height:100,
    },
    weatherDescription:{
        textTransform:'capitalize',
    },
    textPrimary:{
        fontSize:40,
        color:PRIMARY,
    },
    textSecondary:{
        fontSize:20,
        color:SECONDARY,
        fontWeight:'500',
        marginTop:10,
    },
})
