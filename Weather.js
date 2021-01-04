import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm",
        gradient: ["#4ECDC4", "#556270"]
    },
    Drizzle: {
        iconName: "rainy",
        gradient: ["#3a7bd5","#3a6073"]
    },
    Rain: {
        iconName: "rainy",
        gradient: ["#005C97","#363795"]
    },
    Snow: {
        iconName: "snow",
        gradient: ["#83a4d4","#b6fbff"]
    },
    Mist: {
        iconName: "menu-outline",
        gradient: ["#E6DADA","#274046"]
    },
    Smoke: {
        iconName: "menu-outline",
        gradient: ["#E6DADA","#274046"]
    },
    Haze: {
        iconName: "reorder-three",
        gradient: ["#E6DADA","#274046"]
    },
    Dust: {
        iconName: "menu-outline",
        gradient: ["#e9d362","#333333"]
    },
    Fog: {
        iconName: "menu-outline",
        gradient: ["#f79d00","#64f38c"]
    },
    Sand: {
        iconName: "menu-outline",
        gradient: ["#D1913C","#FFD194"]
    },
    Ash: {
        iconName: "menu-outline",
        gradient: ["#1F1C2C","#928DAB"]
    },
    Squall: {
        iconName: "rainy-outline",
        gradient: ["#BBD2C5","#536976","#292E49"]
    },
    Tornado: {
        iconName: "thunderstorm-outline",
        gradient: ["#485563","#29323c"]
    },
    Clear: {
        iconName: "sunny-outline",
        gradient: ["#3A1C71","#D76D77","#FFAF7B"]
    },
    Clouds: {
        iconName: "cloudy-outline",
        gradient: ["#2b5876","#4e4376"]
    },
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <View style={styles.halfContainer}>
                <Ionicons 
                    name={weatherOptions[condition].iconName}
                    size={92}
                    color="white"
                />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>another half container</Text>
            </View>
            <StatusBar barStyle="light-content" />
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",
    ])
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});