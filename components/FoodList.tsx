import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, Text } from 'react-native';
import FoodCard from './FoodCard';
import { useCart } from './CartProvider';

type FoodListProps = {
    borgers: string[][][];
    name: string;
};

const ScrollContainer = styled.ScrollView`
  width: auto;
  height: auto;
`;

const HStack = styled.View<{ isFirstChild: boolean }>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 10px;
  margin-top: ${(props) => (props.isFirstChild ? '10px' : '0px')};
`;

const H1 = styled.Text`
  margin: 20px;
  font-size: 20px;
  font-weight: 900;
`;

const FoodList: React.FC<FoodListProps> = ({ borgers, name }) => {
    const { addToCart } = useCart(); // Access addToCart from context

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <H1>{name}</H1>
            <ScrollContainer showsVerticalScrollIndicator={false}>
                {borgers.map((borger, index) => (
                    <HStack key={index} isFirstChild={index === 0}>
                        <FoodCard
                            name={borger[0][0]}
                            price={borger[0][1]}
                            image={borger[0][2]}
                            onPress={() => addToCart(borger[0][0], borger[0][1])}
                        />
                        <FoodCard
                            name={borger[1][0]}
                            price={borger[1][1]}
                            image={borger[1][2]}
                            onPress={() => addToCart(borger[1][0], borger[1][1])}
                        />
                    </HStack>
                ))}
            </ScrollContainer>
        </ScrollView>
    );
};

export default FoodList;
