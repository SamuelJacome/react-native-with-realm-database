import React, {useState, useEffect} from 'react';
import { StatusBar, Keyboard } from 'react-native';
import getRealm from './services/realm'
import { Container, Title, Input, Button, CenterView, List, TextButton } from './styles';
import Jobs from './components/Jobs'


function App () {

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [idEdit, setIdEdit] = useState(null);
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

  function editJob(data){

    setName(data.name);
    setOffice(data.office);
    setIdEdit(data.id);


  }

  async function uptadeJob(){
    const realm = await getRealm();
    if(idEdit ===  null){
      alert('Selecione o botão edit do profissional que deseja alterar abaixo')
      return;

    }
    const response = {
      id: idEdit,
      name: name,
      office: office,
    }
    realm.write(()=>{
      realm.create('Job', response, 'modified'); // o parametro modified verifica se o id já existe, se já existe ele vai atualizar.
    })
    const dataChanged = jobs.map( job => (job.id === response.id ? response : job));
    setJobs(dataChanged)
    setName('');
    setOffice('');
    setIdEdit(null);
    Keyboard.dismiss();
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


      <Button onPress={uptadeJob}>
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
     <Jobs data={item} edit={editJob}/>
   )}
   
   />

  </Container>
  
  
  );
}

export default App;