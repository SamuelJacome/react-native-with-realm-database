import React, {useState} from 'react';
import { StatusBar } from 'react-native';

import { Container, Title, Input, Button, CenterView, List } from './styles';

const App = () => {
  return (
  
  <Container>
    <StatusBar 
    backgroundColor="transparent" 
    translucent={true}
    barStyle="light-content"
    />
    <Title>Nome</Title>
    <Input 
    autoCapitalize="none" 
    autoCorrect={false} 
    value={nome} 
    onChangeText={()=>{}}/>


    <Title>Cargo</Title>
    <Input 
    autoCapitalize="none" 
    autoCorrect={false} 
    value={cargo} 
    onChangeText={()=>{}}/>

   

  </Container>
  
  
  );
}

export default App;