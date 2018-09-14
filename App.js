import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, TextInput } from 'react-native';
import yeet from './images/yeet520.png';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      yeets: [],
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 10}}>
        <TextInput
          onSubmit={(text) => this.setState({text})}
          style={{height: 40, fontSize: 42}}
          placeholder="enter your yeet~"
        />
        </View>
        <FlatList
          data={this.state.yeets}
          renderItem={({item}) => <Text onPress={() => alert(item.key)} style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});
