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
import Pessoa from './src/components/pessoas';

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
});

export default App;

