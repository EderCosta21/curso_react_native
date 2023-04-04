import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {AppBar} from '@react-native-material/core';
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <AppBar centerTitle={true} title={'Estudo Reac Native'}></AppBar>
        <Text style={styles.logo}> Menu Pizza</Text>

        <Text style={styles.pizza}> Você escolheu : Pizza de Calabresa</Text>
        <Text style={styles.valor}> Valor: R$ 10.00</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
    paddingTop: 20,
  },
  logo: {},
  pizza: {},
  valor: {},
});

export default App;
