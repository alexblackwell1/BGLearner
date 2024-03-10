// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Awesome Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffcc00', // Yellow header
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
