// ExamplePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Header from './../components/Header.jsx';
// import NavigationBar from './components/NavigationBar.jsx';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {/* <NavigationBar /> */}
      <p>Body Text HERE!!!</p>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  // Other styles for your page
});

export default LandingPage;
