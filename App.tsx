import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';

class App extends React.Component<any, any> {
  render() {
    return <View style={{
      flex:1 ,
      flexDirection:'row', 
      alignItems:'center',
     justifyContent:'space-between'
     }}>
    {
    /* <View style={{flex:1 ,flexDirection:'row', justifyContent:'space-between'}}> */}
      <View style={{width:50, height:50, backgroundColor:'red'}}></View>
      <View style={{width:50,  height:50,backgroundColor:'green'}}></View>
      <View style={{width:50,  height:50,backgroundColor:'yellow'}}></View>
      <View style={{width:50, height:50, backgroundColor:'red'}}></View>
      <View style={{width:50,  height:50,backgroundColor:'green'}}></View>
      <View style={{width:50,  height:50,backgroundColor:'yellow'}}></View>
      
    </View>;
  }
}

export default App;
