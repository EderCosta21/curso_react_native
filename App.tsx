import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TextInput,
} from 'react-native';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      nome: '',
    };

    this.getNome = this.getNome.bind(this);
  }
  getNome(texto: string) {
    if(texto.length>0)
    {
      this.setState({nome: 'Bem vindo '+texto});
    }else{
      this.setState({nome: ''});
    }

  }

  render() {
    let value = '';
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          clearButtonMode="always"
          keyboardType="default"
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={this.getNome}></TextInput>

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    flex: 1,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
  },
  input: {
    borderRadius: 30,
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 2,
    fontSize: 18,
    padding: 10,
  },
  texto: {
    padding: 10,
    textAlign: 'center',
    fontSize: 22,
  },
});

export default App;
