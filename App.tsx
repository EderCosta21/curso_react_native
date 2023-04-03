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
      input:''
    };

    this.entrar = this.entrar.bind(this);
  }
  entrar() {
  
      this.setState({nome: 'Bem vindo '+this.state.input});
  

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          clearButtonMode="always"
          keyboardType="default"
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto)=>this.setState({input:texto})}
         ></TextInput>
          
          <Button color={'red'}  title='Entrar' onPress={()=>this.entrar()}></Button>
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
  button:{
    backgroundColor:'red'
  }
});

export default App;
