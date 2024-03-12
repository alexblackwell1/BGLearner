import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./../components/Header.jsx";

const LandingPage = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <View style={{ ...styles.container, ...dimensions }}>
            <Header />
            <p>Body Text HERE!!!</p>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1
    }
    // Other styles for your page
});

export default LandingPage;
