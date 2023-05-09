import React from 'react';
import styled from 'styled-components';

import Persons from './Persons';
import PersonsCard from './PersonsCard';
import PersonList from './assets/components/ConnectionApi';


const MainContainer = styled.main`
display: flex;
flex-direction: column;
//justify-content: space-evenly;
align-items: center;
min-height: 100vh;
`;

const StyledPara = styled.p`
max-width: 20em;
`;

/*
const mySQL = [
  {
    "name": "MK Hasan",
    "designation": "Head Office",
    "description": "Responsible Person",
  }
]
*/

function App() {

  return (
    <MainContainer>
        <h1>Welcome</h1>
        <StyledPara>This is the most awesomest page ever. Trust me!</StyledPara>
        <Persons/>
        <PersonsCard/>
        <PersonsCard/>
        <PersonsCard/>
        <PersonsCard/>
        <PersonsCard/>
    </MainContainer>
  )
}

export default App
