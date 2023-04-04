import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class App extends React.Component<any, any> {
  frase: string[];

  constructor(props: any) {
    super(props);
    {
      this.state = {
        textoFrase: '',
        imgClosed: require('./src/images/biscoitofechado.png'),
        imgOpen: require('./src/images/biscoitoaberto.png'),
        img: require('./src/images/biscoitofechado.png'),
      };

      this.openBiscoito = this.openBiscoito.bind(this);
    }
    this.frase = [
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado',
      'Imagine uma nova história para sua vida e acredite nela.',
      'Não espere por uma crise para descobrir o que é importante em sua vida.',
      'Pessimismo leva à fraqueza, otimismo ao poder.',
      'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.',
      'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.',
      'Não são as nossas ideias que nos fazem otimistas ou pessimistas, mas o otimismo e o pessimismo de origem fisiológica que fazem as nossas ideias.',
      'O contrário do pessimismo raramente é o otimismo. O contrário do pessimismo, se não é a boa intenção de injetar força nos fracos, o que é bonito e faz bem, é quase sempre a idiota.',
      'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
      'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
      'Deve-se temer mais o amor de uma mulher do que o ódio de um homem',
      'Tudo vale a pena quando a alma não é pequena.',
    ];
  }

  openBiscoito() {
    let number = Math.floor(Math.random() * this.frase.length);
    this.setState({textoFrase: this.frase[number], img: this.state.imgOpen});
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.state.img} />
        <Text style={styles.textoFrase}> {this.state.textoFrase}</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.openBiscoito();
          }}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Abrir Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: '700',
    borderColor: '#dd7b22',
  },
});

export default App;
