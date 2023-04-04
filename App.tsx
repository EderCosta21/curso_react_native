import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  ScrollView
} from 'react-native';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      horizontal={false}
      
      >
      <View style={styles.box}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>
      </ScrollView>
   
    </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c2c2c2',padding:10
  },
  box:{
    backgroundColor:'red',
    height:150,
    width:150,
  },
  box1:{
    backgroundColor:'yellow',
    height:150,
    width:150,
  },
  box2:{
    backgroundColor:'blue',
    height:150,
    width:150,
  },
  box3:{
    backgroundColor:'green',
    height:150,
    width:150,
  },
  box4:{
    backgroundColor:'white',
    height:150,
    width:150,
  },
  box5:{
    backgroundColor:'black',
    height:150,width:150,
  },
  
});

export default App;
