import React, {useState, useEffect} from 'react';
import { StatusBar, Keyboard } from 'react-native';
import getRealm from './services/realm'
import { Container, Title, Input, Button, CenterView, List, TextButton } from './styles';
import Jobs from './components/Jobs'


function App () {

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [jobs, setJobs] = useState([])


  useEffect(() => {  
    async function loadJobs(){
      const realm = await getRealm();
      const data =  realm.objects('Job');
      setJobs(data)
    }
    loadJobs();


  }, []);
  async function addjob(){
    try{

      if (name === '' || office === ''){
        alert('preencha todos os campos')
        return;
      }


      const data = {name: name, office: office}
      await saveJob(data)

      setName('');
      setOffice('');
      Keyboard.dismiss();
    }catch(err){
      alert(err)
    }
  }

  async function saveJob(){
    const realm = await getRealm();

    const id = realm.objects('Job').length +1;

    const jobs = {
      id: id,
      name: name,
      office: office
    }

    realm.write(()=>{
      realm.create('Job', jobs);
    });
  }

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

      <Button onPress={addjob}> 
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
   data={jobs}
   keyExtractor={item=> String(item.id)}
   renderItem={({item}) =>(
     <Jobs data={item}/>
   )}
   
   />

  </Container>
  
  
  );
}

export default App;