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

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'eder', idade: 5, email: 'eder@gmail.com'},
        {id: '2', nome: 'eder1', idade: 15, email: 'eder1@gmail.com'},
        {id: '3', nome: 'eder2', idade: 25, email: 'eder2@gmail.com'},
        {id: '4', nome: 'eder3', idade: 35, email: 'eder3@gmail.com'},
        {id: '5', nome: 'eder4', idade: 45, email: 'eder4@gmail.com'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.feed}
          renderItem={({item}) => <Pessoa data={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
    padding: 10,
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 22,
  },
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15,
  },
});

export default App;

class Pessoa extends Component<{
  data: {id: string; nome: string; idade: number; email: string};
}> {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}
