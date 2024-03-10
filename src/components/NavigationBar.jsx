// NavigationBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.navigation}>
      <Text style={styles.navigationText}>Home</Text>
      <Text style={styles.navigationText}>About</Text>
      <Text style={styles.navigationText}>Contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0074D9', // Blue navigation
    paddingVertical: 10,
  },
  navigationText: {
    color: 'white',
  },
});

export default NavigationBar;
