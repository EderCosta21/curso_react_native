import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';

class App extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: '',
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(nome:string){
    this.setState({
      nome:nome
    })
  }


  render() {
    return (
      <View style={{marginTop: 30}}>
        <Text>Ola {this.state.nome}</Text>

        <Button title="Clicar aki" onPress={()=>this.entrar('eder novo')} color='red'/>
        <Button title="Click aki" color='green'   onPress={() => {
           this.setState({
            nome:'sem nome'
          })
        }} />
      </View>
    );
  }
}
export default App;
