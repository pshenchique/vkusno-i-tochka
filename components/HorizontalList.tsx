import React, { useState } from 'react';
import styled from 'styled-components/native';

type ButtonListProps = {
    buttonNames: string[];
    onPress: (buttonIndex: number) => void;
};

const ScrollContainer = styled.ScrollView`
  padding: 12px 10px;
  height: 55px;
  background-color: white;
  border-bottom-width: 2px;
  border-bottom-color: lightgray;
  flex-grow: 0;
`;

const Button = styled.TouchableOpacity<{ isFirstChild: boolean, isLastChild: boolean }>`
  border-radius: 8px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => (props.isFirstChild ? '20px' : '0px')};
  padding-right: ${(props) => (props.isLastChild ? '20px' : '0px')};
`;

const ButtonText = styled.Text<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? 'black' : 'darkgrey')};
  font-weight: ${(props) => (props.isActive ? '900' : '300')};
  font-size: 16px;
`;

const HorizontalButtonList: React.FC<ButtonListProps> = ({ buttonNames, onPress }) => {
    const [ActiveButton, setActiveButton] = useState<number>(0);

    const handleButtonPress = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
        onPress(buttonIndex);
    };

    return (
        <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
            {buttonNames.map((name, index) => (
                <Button key={index} onPress={() => handleButtonPress(index)} isFirstChild={index === 0} isLastChild={index === buttonNames.length-1}>
                    <ButtonText isActive={ActiveButton === index}>{name}</ButtonText>
                </Button>
            ))}
        </ScrollContainer>
    );
};

export default HorizontalButtonList;
