import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View>
        <Text>Home!</Text>
      </View>
    );
  }
}

export default Home;