import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import {colors} from '../utils'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'


const {PRIMARY,SECONDARY,BORDER} = colors
export default function WeatherDetails({currentWeather, unitSystem}) {
    const { main : {feels_like , humidity , pressure , temp_min , temp_max},wind:{speed} }= currentWeather
    const windSpeed = unitSystem === 'metric' || 'standard' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} M/hr`
    return (
        <View style={styles.WeatherDetails}>
            <View style={styles.WeatherDetailsRow}>
                <View style={{...styles.WeatherDetailsBox, borderRightWidth:1, borderRightColor:BORDER}}>
                    <View style={styles.WeatherDetailsRow}>
                    <FontAwesome5 name="temperature-low" size={25} color={PRIMARY} />
                        <View style={styles.WeatherDetailsItems}>
                        <Text style={styles.TextSecondary}>Feels Like : {feels_like}°</Text>
                        </View>
                    </View> 
                </View>
                <View style={styles.WeatherDetailsBox}>
                <View style={styles.WeatherDetailsRow}>
                    <MaterialCommunityIcons name="water" size={30} color={PRIMARY} />
                        <View style={styles.WeatherDetailsItems}>
                        <Text style={styles.TextSecondary}>Humidity : {humidity}%</Text>
                        </View>
                    </View> 
                </View>     
            </View>

            <View style={{...styles.WeatherDetailsRow, borderTopWidth:1,borderTopColor:BORDER}}>
            <View style={{...styles.WeatherDetailsBox, borderRightWidth:1, borderRightColor:BORDER}}>
                    <View style={styles.WeatherDetailsRow}>
                    <MaterialCommunityIcons name="weather-windy" size={25} color={PRIMARY} />
                        <View style={styles.WeatherDetailsItems}>
                        <Text style={styles.TextSecondary}>Wind : {speed}{windSpeed}</Text>
                        </View>
                    </View> 
                </View>
                <View style={styles.WeatherDetailsBox}>
                <View style={styles.WeatherDetailsRow}>
                    <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY} />
                        <View style={styles.WeatherDetailsItems}>
                        <Text style={styles.TextSecondary}>Pressure : {pressure} hPa</Text>
                        </View>
                    </View> 
                </View> 
            </View>

            <View style={{...styles.WeatherDetailsRow, borderTopWidth:1,borderTopColor:BORDER}}>
            <View style={{...styles.WeatherDetailsBox, borderRightWidth:1, borderRightColor:BORDER}}>
                    <View style={styles.WeatherDetailsRow}>
                    <FontAwesome5 name="thermometer-full" size={25} color={PRIMARY} />
                        <View style={styles.WeatherDetailsItems}>
                        <Text style={styles.TextSecondary}>Maximum Temperature : {temp_max}°</Text>
                        </View>
                    </View> 
                </View>
                <View style={styles.WeatherDetailsBox}>
                <View style={styles.WeatherDetailsRow}>
                <FontAwesome5 name="thermometer-empty" size={25} color={PRIMARY} />
                        <View style={styles.WeatherDetailsItems}>
                        <Text style={styles.TextSecondary}>Minimum Temperature : {temp_min}°</Text>
                        </View>
                    </View> 
                </View> 
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    WeatherDetails:{
        top:-100,
        marginTop:'auto',
        borderWidth:1,
        borderColor:BORDER,
        borderRadius:10,
        marginHorizontal:15,
        marginBottom:5,
        fontWeight:'500'
    },
    WeatherDetailsRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    WeatherDetailsBox:{
        flex:1,
        padding:25,
    },
    WeatherDetailsItems:{
        alignItems:'flex-end',
        justifyContent:"flex-end",
    },
    TextSecondary:{
        marginLeft:10,
        fontSize:15,
        fontWeight:'700',
        color:SECONDARY,
    }
})