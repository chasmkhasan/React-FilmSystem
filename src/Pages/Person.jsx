import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Column = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
`;

const Card = styled.div`
   display: flex;
   height: 10em;
   width: 25em;
   border: 3px solid black;
   margin-top: 1em;
   margin-bottom: 1em;
   background: yellowgreen;
`;

const Title = styled.h1`
    display: inline;
    text-align: center;
    text-justify: center;
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
          {superPerson.map((sv) => {
            return (
              <Column key = {sv.id}>
                <Card>
                  <Title>{sv.name}</Title>
                  <Text><b>Email:</b>{sv.email}</Text>
                </Card>
              </Column>
            )
          })}
        </div>
    </>
        
  )
}

export default Person;