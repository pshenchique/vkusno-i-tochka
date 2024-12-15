import FoodList from '@/components/FoodList';
import { Header } from '@/components/Header';
import HorizontalButtonList from '@/components/HorizontalList';
import SpecialsList from '@/components/SpecialsList';
import { allSpecials } from '@/constants/Specials';
import { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: white;
`;

const buttonNames = ['Актуальные акции', 'Больше бонусов', 'Акции в других предприятиях'];

export default function Specials() {
  const [ActiveList, setActiveList] = useState<string[][]>(allSpecials[0]);

  const handleButtonPress = (buttonIndex: number) => {
    setActiveList(allSpecials[buttonIndex]);
    // Alert.alert(`${buttonName} pressed!`);
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header />
      <HorizontalButtonList buttonNames={buttonNames} onPress={handleButtonPress} />
      <SpecialsList specials={ActiveList}  />
    </Container>
  );
}
