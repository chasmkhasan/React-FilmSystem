import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 10em;
width: 25em;
border: 3px solid black;
margin-top: 1em;
margin-bottom: 1em;
background: aquamarine;
`;


function PersonsCard(props){

    return(
        <CardContainer>
            <h1>Name:</h1>
            <p>Designation:</p>
            <p>Description:</p>
        </CardContainer>

    );
}

export default PersonsCard;