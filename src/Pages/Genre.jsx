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

function Genre() {
  const [superGenre, setGenre] = useState([]);
 
  useEffect(() => {
    axios.get("https://localhost:7159/api/AllGenres").then((response) => {
      setGenre((data) => {
        return response.data;
      });
    });
  }, []);

  return(
    <>
       <div>
      <h2>Genres Data...</h2>
      <table>
        <tbody>
            {superGenre.map((sv) => {
                return (
                <Column key = {sv.id}>
                  <Card>
                    <Title><b>Movie Type:- </b>{sv.title}</Title>
                    <Title><b>Movie Description:- </b>{sv.description}</Title>
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

export default Genre;





