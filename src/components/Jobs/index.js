import React, {} from 'react';
import { View, Text } from 'react-native';

import { Container, Name, Office, CenterView, EditItem, EditText } from './styles';

const Jobs = ({data, edit, delet}) => {
  return (
  <Container>

  <Name>{data.name}</Name>
  <Office>{data.office}</Office>


  <CenterView>
    <EditItem onPress = {()=>{edit(data)}}>
      <EditText> Edit </EditText>
    </EditItem>

    <EditItem onPress = {()=>{delet(data)}}>
      <EditText> Delete </EditText>
    </EditItem>

  </CenterView>
  </Container>
  
  );
}

export default Jobs;