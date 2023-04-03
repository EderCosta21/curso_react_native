import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';

class App extends React.Component<any, any> {
  render() {
    return <View style={{flex:1, backgroundColor:'grey'}}>
      <View style={{flex :1, backgroundColor:'red'}}></View>
      <View style={{flex :1, backgroundColor:'green'}}></View>
      <View style={{flex :2, backgroundColor:'yellow'}}></View>
    </View>;
  }
}

export default App;
