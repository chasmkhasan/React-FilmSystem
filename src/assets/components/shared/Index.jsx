import React from "react";
import styled from "styled-components";


const Title = styled.h1`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

const MainComponents = () => {

    return(
        <>
        <Title>Welcome to TMDB World.</Title>
        </>
    )
}

export default MainComponents;