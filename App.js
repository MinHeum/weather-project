import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "fc994814797e05607c384a9ecb3f612c";

export default class App extends React.Component {
  state = {
    isLoding: true
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
    console.log(data);
  };

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      this.setState( {isLoding: false} )
    }
    catch(error) {
      Alert.alert("Can't find you.", "So sad")
    }
  }
  
  componentDidMount() {
    this.getLocation()
  }

  render(){
    const { isLoding } = this.state;
    return isLoding ? <Loading/> : null;
  }
}