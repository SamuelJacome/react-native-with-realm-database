import React, {} from 'react';
import { View, Text } from 'react-native';

import { Container, Name, Office, CenterView, EditItem, EditText } from './styles';

const Jobs = ({data}) => {
  return (
  <Container>

  <Name>{data.name}</Name>
  <Office>{data.office}</Office>


  <CenterView>
    <EditItem onPress = {()=>{}}>
      <EditText> Edit </EditText>
    </EditItem>

    <EditItem onPress = {()=>{}}>
      <EditText> Delete </EditText>
    </EditItem>

  </CenterView>
  </Container>
  
  );
}

export default Jobs;