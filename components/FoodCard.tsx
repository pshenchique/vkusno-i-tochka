import { View, Image, Text } from 'react-native';
import styled from "styled-components/native";
import { IconSymbol } from '@/components/ui/IconSymbol';

type FoodCardProps = {
  name: string;
  price: string;
  image: string;
  onPress: (name: string, price: number) => void;
};

const Container = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  background-color: white;

  shadowColor: black;
  shadowOffset: {
	width: 0;
	height: 2;
  };
  shadowOpacity: 0.25;
  shadowRadius: 2;

  elevation: 2; /* Android shadow */

  width: 47%;
  padding: 12px 10px;

  min-height: 274px;
`;

const HStack = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 6px;
  width: 100%;
`;

const BorgerImage = styled.Image`
  height: 180px;
  width: 180px;
`

const PriceText = styled.Text`
  font-size: 20px;
  font-weight: 900;
`

const NameText = styled.Text`
  margin-bottom: 6px;
`

const FoodCard: React.FC<FoodCardProps> = ({ name, price, image, onPress }) => {
  return (
    <Container onPress={() => onPress(name, Number(price))}>
      <BorgerImage source={{ uri: image }} />
      <NameText>{name}</NameText>
      <HStack>
        <PriceText>{price} р.</PriceText>
        <IconSymbol size={32} name="plus.rectangle.fill" color="black" />
      </HStack>
    </Container>
  )
}

export default FoodCard