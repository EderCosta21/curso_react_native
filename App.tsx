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
  render() {
    return <View style={styles.container}></View>;
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    flex: 1,
  },
});

export default App;
