import React from 'react';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';
import yeet from './images/yeet520.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={yeet} style={styles.image}></Image>
        <Text style={styles.text}>
          YEET
        </Text>
        <View style={styles.button}> 
          <Button
            onPress={() => alert('lel')}
            title="Start yeetin'"
            color="#ffff"
            accessibilityLabel="Login button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 375,
    width: 375,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    bottom: 75,
  },
  text: {
    fontFamily: 'Chalkboard SE',
    fontSize: 74,
    color: '#ffff',
  }
});
