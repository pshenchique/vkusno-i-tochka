import styled from "styled-components/native";
import React from "react";
import SpecialsCard from "./SpecialsCard";

type SpecialsListProps = {
    specials: string[][]
    horizontal?: boolean
};

interface ScrollContainerProps {
    horizontal?: boolean;
}

const ScrollContainer = styled.ScrollView.attrs<ScrollContainerProps>(({ horizontal }) => ({
    contentContainerStyle: {
        padding: 20,
        gap: 10,
        ...(!horizontal && {
            gap: 20,
        }),
        ...(!horizontal && {
            justifyContent: "center",
            alignItems: "center",
        }),
    },
})) <ScrollContainerProps>``;

const SpecialsList: React.FC<SpecialsListProps> = ({ specials, horizontal = false }) => {
    return (
        <ScrollContainer showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} horizontal={horizontal}>
            {specials.map((special, index) => (
                <SpecialsCard key={index} text={special[0]} text2={special[1]} image={special[2]} price={special[3]} date={special[4]} isFirstChild={index === 0} horizontal = {horizontal} />
            ))}
        </ScrollContainer>
    );
};
export default SpecialsList