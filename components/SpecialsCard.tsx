import { View, Image, Dimensions, Alert } from "react-native"
import styled from "styled-components/native"

type SpecialsCardProps = {
    text: string,
    text2: string,
    image: string,
    price: string,
    date: string,
    isFirstChild: boolean,
    horizontal: boolean
}



const Container = styled.TouchableOpacity<{isFirstChild: boolean, horizontal: boolean}>`
  width: ${(props) => (props.horizontal ? '300px' : '98%')};
  height: 200px;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  column-gap: 6px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  border-left-width: 10px;
  border-left-color: orange;

  shadowColor: black;
  shadowOffset: {
	width: 0;
	height: 2;
  };
  shadowOpacity: 0.25;
  shadowRadius: 3;

  elevation: 3; /* Android shadow */
`;

const H1 = styled.Text`
    font-size: 16px;
    font-weight: 900;
`

const H2 = styled.Text`
    font-size: 12px;
`

const BottomText = styled.Text`
    font-size: 10px;
    color: gray;
`

const Cont1 = styled.View`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-between;
`

const Cont2 = styled.View`
  display: flex;
  align-items: center;
  justify-content: end;
`

const PriceCircle = styled.Text`
  text-align: center;
  background-color: red;
  color: white;
  font-size: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-weight: 900;
  line-height: 50px;
`

const StyledImage = styled.Image`
  height: 120px;
  width: 120px;
`

const showSpecial = () => {
  Alert.alert(`Извините, эта акция сейчас недоступна`);
};

const SpecialsCard: React.FC<SpecialsCardProps> = ({ text, text2, image, price, date, isFirstChild, horizontal }) => {
    return (
      <Container isFirstChild={isFirstChild} horizontal={horizontal} onPress={showSpecial}>
            <Cont1>
                <View>
                    <H1>{text}</H1>
                    <H2>{text2}</H2>
                </View>
                <BottomText>Действует до {date}</BottomText>
            </Cont1>
            
            <Cont2>
                <PriceCircle>{price} ₽</PriceCircle>
                <StyledImage source={{ uri: image }} />
            </Cont2>
        </Container>
    )
}
export default SpecialsCard