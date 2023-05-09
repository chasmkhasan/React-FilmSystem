import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import PersonalCardLink from './assets/components/PersonalCardLink';


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
            
                <h1>Full Name:</h1>
                <p>Designation</p>
                <p>Decription</p>
                
            
            
        </CardContainer>

    );
}

export default PersonsCard;