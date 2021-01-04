import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';

export default function Weather({ temp }) {
    return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
            <Ionicons name="sunny" size={92} color="black" />
            <Text style={styles.temp}>{temp}˚</Text>
        </View>
        <View style={styles.halfContainer}>
            <Text>another half container</Text>
        </View>
    </View>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired
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