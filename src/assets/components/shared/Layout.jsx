import React from "react";
import styled from "styled-components";


const MainContainer = styled.main`
display: flex;
//flex-direction: column;
justify-content: space-evenly;
//align-items: center;
//min-height: 100vh;
`;

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

// Top Para
const StyledPara = styled.p`
width: 400px;
border: 10px solid green;
padding: 20px;
margin: 20px;
text-align: center;
background: aqua;
`;

function Layout(props) {

    return (
        <div>
            <MainContainer>
                <StyledPara>This is the most awesome page ever. Trust me!</StyledPara>
            </MainContainer>
            <CardContainer>{props.children}</CardContainer>
         </div>
    )
}

export default Layout;