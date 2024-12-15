import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';

const HeaderBack = styled.View`
    background-color: #274f34;
    width: 100%;
    height: 110px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

const StyledImage = styled.Image`
height: 25%;
aspect-ratio: 800/630;
margin-top: 30px;
`
export function Header() {
    return (
    <HeaderBack>
            <StyledImage source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vkusno_I_Tochka_symbol.svg/800px-Vkusno_I_Tochka_symbol.svg.png" }} />
    </HeaderBack>
    )
}
