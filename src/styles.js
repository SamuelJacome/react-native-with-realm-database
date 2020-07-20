import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height'


export const Container = styled.View`
 flex: 1;
 background-color: #5691c8;
 padding-top: ${30 + getStatusBarHeight(true)}
`;

export const Title = styled.Text`
font-size: 25px;
margin-left: 15px;
color: #FFF;

`;

export const Input = styled.TextInput`
height: 40px;
margin-left: 15px;
margin-right: 15px;
margin-bottom: 10px;
padding: 5px;
border-radius: 5px;
background-color: #FFF;
`;

export const Button = styled.TouchableOpacity`
background-color: #FFF;
height: 40px;
border-radius: 5px;
padding: 5px;
`;



export const CenterView = styled.View`
justify-content: space-around;
align-items: center;
flex-direction: row
`;

export const List = styled.FlatList`
margin-top: 20px;
`;


export const TextButton = styled.Text`
font-size: 23px;
text-align: center;
color: #000

`;