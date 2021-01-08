import { Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "fc994814797e05607c384a9ecb3f612c";

export default function App(){
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  getWeather = async (latitude, longitude) => {
    const { 
      data: {
        main: {temp},
          weather
          }
        } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      setCondition(weather[0].main);
      setTemp(temp);
      setIsLoading(false);
  };

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude)
    }
    catch(error) {
      Alert.alert("Can't find you.", "So sad")
    }
  }
  
  useEffect(() => {
    getLocation()
  }, [])

    return (
    isLoading ? (
    <Loading/>
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    )
    )
}