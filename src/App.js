import React, {useState} from 'react';
import { StatusBar } from 'react-native';

import { Container, Title, Input, Button, CenterView, List, TextButton } from './styles';
import Jobs from './components/Jobs'
function App () {

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [jobs, setJobs] = useState([])

  return (
  
  <Container>
    <StatusBar 
    backgroundColor="transparent" 
    translucent={true}
    barStyle="light-content"
    />
    <Title>Name</Title>
    <Input 
    autoCapitalize="none" 
    autoCorrect={false} 
    value={name} 
    onChangeText={(text)=> setName(text)} />


    <Title>Office</Title>
    <Input 
    autoCapitalize="none" 
    autoCorrect={false} 
    value={office} 
    onChangeText={(office)=> setOffice(office)} />


    <CenterView>

      <Button>
        <TextButton>
          Cadastrar
        </TextButton>
      </Button>


      <Button>
        <TextButton>
          Editar
        </TextButton>
      </Button>
    </CenterView>


   <List 
   keyboardShouldPersistTaps="handled"
   data={[
     {
       id: 1,
       name: 'Samuel',
       office: 'developer'

     }
   ]}
   keyExtractor={item=> String(item.id)}
   renderItem={({item}) =>(
     <Jobs data={item}/>
   )}
   
   />

  </Container>
  
  
  );
}

export default App;