import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    let nome = 'Projeto';
    let url = 'https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg'
    return (
      <View style={{marginTop: 30}}>
        <Text>Ola</Text>
        <Text>Ola 2</Text>
        <Text style={{color: 'red', fontSize: 20, margin: 10}}>Ola 3 </Text>
        <Text>Ola 4</Text>
        <Welcome name="sara"/>
        <Text
          style={{
            paddingTop:10,
            textAlign: 'center',
          }}>
          {nome}
        </Text>
        <Image
          source={{
            uri: url,
          }}
          style={{
            width: 300,
            height: 300,
            marginLeft: 30,
            alignItems: 'center',
          }}
        />
        <ViewImage largura={200} altura={200}/>

 
      </View>
    );
  }
}
export default App;

function Welcome(props:{name:String})

{
  return <Text>OIla, {props.name}</Text>
}


class ViewImage  extends Component<{largura:number,altura:number}>{
  render(){
    let url = 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
    return (
      <Image
      source={{
        uri: url,
      }}
      style={Stile.stile}
      />
    )
    
      
  }
  
}

const Stile = StyleSheet.create({
  stile :{
  width: 10,
  height: 10,
  marginLeft: 30,
  alignItems: 'center',
  marginTop:30}
})