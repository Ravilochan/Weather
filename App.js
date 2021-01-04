import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState}from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import Weatherinfo from './components/WeatherInfo'
import UnitsPicker from './components/Units'
import {colors} from "./utils"
import Reload from './components/Reload';
import WeatherDetails from './components/WeatherDetails';
const API_KEY = 'API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
export default function App() {
  const [errorMessage, setErrorMessage]=useState(null)
  const [currentWeather,setCurrentWeather]=useState(null)
  const [units, setUnits] = useState('metric')
useEffect(()=>{
  load()
},[units])

async function load(){
  setCurrentWeather(null)
  setErrorMessage(null)
  try {
    let {status} = await Location.requestPermissionsAsync()
    if(status != 'granted'){
      setErrorMessage('Access to Location is needed')
      return;
    }
    const location = await Location.getCurrentPositionAsync()
const {latitude,longitude} = location.coords
const weatherUrl = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY}`
const response = await fetch(weatherUrl)
const result = await response.json()
if(response.ok){
  setCurrentWeather(result)
} else {
  setErrorMessage(result.message)
}

  } catch(error){
    setErrorMessage(error.message)
  }
}

if(currentWeather){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <UnitsPicker units={units} setUnits={setUnits} />
        <Reload load={load} />
      <Weatherinfo currentWeather={currentWeather} />
      </View>
      <WeatherDetails currentWeather={currentWeather} unitSystem={units}/>
      </View>
      
  );
} else if(errorMessage){ 
  return (
    <View style={styles.container}>
      <Text>{errorMessage}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
else{ 
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.PRIMARY} />
      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main :{
    flex:1,
    justifyContent:'center'
  }
});