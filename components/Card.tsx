import { View } from 'react-native';
import styled from "styled-components/native";
import { IconSymbol } from '@/components/ui/IconSymbol';

type CardProps = {
    h1:string,
    h2:string,
    icon:string
    id:number
    onPress: (buttonNumber: number) => void;
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  background-color: white;
  border: 1px solid lightgray;

  shadowColor: black;
  shadowOffset: {
	width: 0;
	height: 2;
  };
  shadowOpacity: 0.25;
  shadowRadius: 3;

  elevation: 3; /* Android shadow */

  width: 45%;
  height: 90px;
  padding: 12px 10px;
`;

const H1 = styled.Text`
    font-size: 16px;
    font-weight: 900;
    padding-bottom: 6px;
`;

const H2 = styled.Text`
    font-size: 14px;
    font-weight: 300;
    color: grey;
`;

const TextContainer = styled.View`
  width: 60%;
  display: flex; 
  align-items: start;
  justify-content: start;
  height: 100%;
`;

const Card: React.FC<CardProps> = ({h1, h2, icon, id, onPress}) => {
    return (
        <Container onPress={()=>onPress(id)}>
            <TextContainer>
                <H1>{h1}</H1>
                <H2>{h2}</H2>
            </TextContainer>
            <IconSymbol size={52} name={icon} color="black" />
        </Container>
    )
}

export default Card