import Card from '@/components/Card';
import { Header } from '@/components/Header';
import HorizontalButtonList from '@/components/HorizontalList';
import SpecialsList from '@/components/SpecialsList';
import { allSpecials } from '@/constants/Specials';
import { useState } from 'react';
import { Alert, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const TopContainer = styled.View`
  row-gap: 6px;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  width: 100%;
`;

const HStack = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  width: 100%;
`;

const buttonNames = ['Актуальные акции', 'Больше бонусов', 'Акции в других предприятиях'];

const BonusCard = styled.View`
  width: 45%;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-left: 10px;
`

const BonusText = styled.Text`
  font-size: 32px;
  font-weight: 900;
`

const GreetingText = styled.Text`
  font-size: 20px;
  font-weight: 900;
  text-align: start;
  width: 100%;
  margin-left: 40px;
`

export default function HomeScreen() {

  const [ActiveList, setActiveList] = useState<string[][]>(allSpecials[0]);

  const handleButtonPress = (buttonIndex: number) => {
    setActiveList(allSpecials[buttonIndex]);
    // Alert.alert(`${buttonName} pressed!`);
  };

  const handleCard = (buttonNumber: number) => {
    switch (buttonNumber) {
      case 0:
        handleButtonPress(1)
        break
      case 1:
        Alert.alert("У вас пока нет бонусов");
        break
      case 2:
        Alert.alert("Сначала заркгистрируйтесь в програме лояльности");
        break
    }

  }

  return (
    <Container>
      <Header />
      <GreetingText>Добрый день!</GreetingText>
      <TopContainer>
        <HStack>
          <BonusCard>
            <BonusText>Мой</BonusText>
            <BonusText>    Бонус</BonusText>
          </BonusCard>
          <Card h1="Получить" h2="Больше бонусов" icon="2.circle.fill" id={0} onPress={handleCard} />
        </HStack>
        <HStack>
          <Card h1="Потратить" h2="Ваши бонусы" icon="arrow.right.arrow.left" id={1} onPress={handleCard} />
          <Card h1="Накопить" h2="Бонусы за покупку" icon="qrcode" id={2} onPress={handleCard} />
        </HStack>
      </TopContainer>
      <HorizontalButtonList buttonNames={buttonNames} onPress={handleButtonPress} />
      <SpecialsList specials={ActiveList} horizontal />
    </Container>
  );
}