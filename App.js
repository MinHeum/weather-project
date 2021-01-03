import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';

export default class App extends React.Component {
  state = {
    isLoding: true
  };
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
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