import React, {} from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Jobs = ({data}) => {
  return (
  <View>

  <Text>{data.name}</Text>
  </View>
  
  );
}

export default Jobs;