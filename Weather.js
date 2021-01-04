import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';

export default function Weather({ temp, condition }) {
    return (
    <View style={styles.container}>
<<<<<<< HEAD
        <View style={styles.halfContainer}>
            <Ionicons name="sunny" size={92} color="black" />
            <Text style={styles.temp}>{temp}˚</Text>
        </View>
        <View style={styles.halfContainer}>
            <Text>another half container</Text>
        </View>
=======
        <Text>
            {temp}
            {condition}
        </Text>
>>>>>>> 02c6071a1cc648f9e132634ebf07a8e7db6021d3
    </View>
    );
}

<<<<<<< HEAD
Weather.propTypes = {
    temp:PropTypes.number.isRequired
=======
Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds"]).isRequired
>>>>>>> 02c6071a1cc648f9e132634ebf07a8e7db6021d3
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});