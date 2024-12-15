import FoodCard from '@/components/FoodCard';
import HorizontalButtonList from '@/components/HorizontalList';
import FoodList from '@/components/FoodList';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { menu } from '@/constants/Borgers';
import { Header } from '@/components/Header';

const Container = styled.View`
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const buttonNames = ['Бургеры и роллы', 'Напитки', 'Закуски и стартеры', 'Десерты'];

export default function Order() {
  const [ActiveList, setActiveList] = useState<number>(0);

  const handleButtonPress = (buttonIndex: number) => {
    setActiveList(buttonIndex);
    // Alert.alert(`${buttonName} pressed!`);
  };

  return (
    <Container>
      <Header />
      <HorizontalButtonList buttonNames={buttonNames} onPress={handleButtonPress} />
      <FoodList borgers={menu[ActiveList]} name={buttonNames[ActiveList]} />
    </Container>
  );
}