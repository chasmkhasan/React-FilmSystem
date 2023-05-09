import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PersonsCard from '../../PersonsCard';

const PersonalCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 10em;
width: 25em;
border: 3px solid black;
margin-top: 1em;
margin-bottom: 1em;
background: blueviolet;
`;

function PersonalCardContainer() {

    return(
        <CardContainer>
            <h1>Full Name: </h1>
            <p>Designation:</p>
            <p>Description</p>

        </CardContainer>
        
    )
}

export default PersonalCardLink;