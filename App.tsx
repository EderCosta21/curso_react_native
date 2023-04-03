import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';

class App extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Eu sou texto 1</Text>
        <Text style={[styles.titulo, styles.alinharTexto2]}>Eu sou texto 2</Text>
        <Text style={styles.alinharTexto}>Eu sou texto 3</Text>
        <Text>Eu sou texto 4</Text>
        <Text>Eu sou texto 5</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:40,
  },
  titulo:{
    fontSize:25,
    color:'red'
  },
  alinharTexto:{
    textAlign:'center'
  },
  alinharTexto2:{
    textAlign:'right'
  }
})
export default App;
