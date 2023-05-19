import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GetPersonChoice from "./GetPersonChoice";

const Column = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  //text-align: center;
   height: 5em;
   width: 45em;
   border: 3px solid black;
   margin-top: 1em;
   margin-bottom: 1em;
   background: yellowgreen;
`;

const Title = styled.h3`
    
`;

const Text = styled.p`
    display: inline;
    text-align: center;
    text-justify: center;
`;

function Person() {
  const [superPerson, setPerson] = useState([]);
   
  useEffect(() => {
    axios.get("https://localhost:7159/api/AllPerson").then((response) => {
      setPerson((data) => {
        return response.data;
      });
    });
  }, []);

  

  return(
    <>
       <div>
      <h2>Persons Data...</h2>
      <table>
        <tbody>
            {superPerson.map((sv) => {
                return (
                <Column key = {sv.id}>
                  <Card>
                    <Title><b>Name:</b>{sv.name}</Title>
                    <Title><b>Email:</b>{sv.email}</Title>
                    <a href= {'/GetPersonChoice/' + sv.id } > See Person Choice</a>
                  </Card>
                </Column>
              )
            })} 
         </tbody>
      </table>
    </div>
    </>
        
  )
}

export default Person;





