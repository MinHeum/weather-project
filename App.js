import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';

export default class App extends React.Component {
  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location)
  }
  
  componentDidMount() {
    this.getLocation()
  }

  render(){
    return <Loading/>
  }
}