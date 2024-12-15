import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Header } from '@/components/Header';
import { useCart } from '@/components/CartProvider';
import { IconSymbol } from '@/components/ui/IconSymbol';

const Container = styled.View`
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const CartItemStyle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgrey;
  width: 100%;
  padding: 10px 20px;
`;

const HStack = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
`;

const TotalPrice = styled.Text`
padding: 20px;
  width: 100%;
  text-align: end;
  font-size: 20px;
  font-weight: 900;
`

const OrderButton = styled.TouchableOpacity`
  background-color: #274f34;
  padding: 16px 36px;
  border-radius: 10px;
  margin: 20px;
`

const OrderButtonText = styled.Text`
    font-size: 20px;
  font-weight: 900;
  color: white;
`

const CartItem: React.FC<{ name: string; quant: number; price: number; onRemove: () => void }> = ({
  name,
  quant,
  price,
  onRemove,
}) => {
  return (
    <CartItemStyle>
      {quant > 1 ? (
        <Text>{name} x {quant}</Text>
      ) : (
        <Text>{name}</Text>
      )}
      <HStack>
        <Text>{price * quant}₽</Text>
        <TouchableOpacity onPress={onRemove}>
          <IconSymbol size={20} name="xmark" color='red' />
        </TouchableOpacity>
      </HStack>
    </CartItemStyle>
  );
};

export default function Map() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <Container>
      <Header />
      {cart.length > 0 ? (
        <Container>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              quant={item.quant}
              price={item.price}
              onRemove={() => removeFromCart(item.name)}
            />
          ))}
          <TotalPrice>Всего: {totalPrice} ₽</TotalPrice>
          <OrderButton onPress={() => Alert.alert("Ващ заказ принят!")}>
            <OrderButtonText>Заказать</OrderButtonText>
          </OrderButton>
        </Container>
      ) : (
          <Text>Ваша корзина пуста</Text>
      )}
    </Container>
  )
}
