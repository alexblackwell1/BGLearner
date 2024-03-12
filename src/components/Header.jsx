// Header.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.topBar}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Awesome Header</Text>
            </View>
            {/* {" "} */}
            <View style={styles.navigation}>
                <Text style={styles.navigationText}>Home</Text>
                <Text style={styles.navigationText}>About</Text>
                <Text style={styles.navigationText}>Contact</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "2em",
        alignItems: "center",
        height: "5em"
    },
    header: {
        backgroundColor: "#ffcc00", // Yellow header
        justifyContent: "space-around",
        padding: 20,
        height: "100%"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center"
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#0074D9", // Blue navigation
        paddingVertical: 10,
        width: "50%",
        height: "100%",
        alignItems: "center"
    },
    navigationText: {
        color: "white",
        fontSize: "20px"
    }
});

export default Header;
