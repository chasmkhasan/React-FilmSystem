import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MovieLinkPost from "./MovieLinkPost";
import MovieRating from "./MovieRatingPost";
import NewGenrePost from "./NewGenrePost";


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

function GetPersonChoice(props){
  const [superGetPersonChoice, setGetPersonChoice] = useState([]);
 
  useEffect(() => {
    axios.get(`https://localhost:7159/api/Person/${props.match.params.id}/Movie`)
        .then((response) => {
        setGetPersonChoice((data) => {
        return response.data;
      });
    });
  }, []);

  return(
    <>
    <div>
      <h2>Persons Choice Data...</h2>
      <table>
        <tbody>
            {superGetPersonChoice.map((sv) => {
                return (
                <Column key = {sv.id}>
                  <Card>
                    <Title><b>Movie Name:</b>{sv.name}</Title>
                    <Title>
                      <b>Movie Link:</b>{sv.link}
                      <Link to={{ pathname: "./MovieLinkPost",
                        state: sv.personID,
                        state: sv.genreID,
                        }}>Add New Film and Link
                      </Link>
                    </Title>
                    <Title>
                      <b>Movie Rating:</b>{sv.rating}
                      <Link to={{ pathname: "./MovieRatingPost",
                      state: sv.personID,
                      state: sv.movieId,
                      }}
                      >Add New Rating
                      </Link>
                    </Title>
                    <Title>
                      <b>Person ID:</b>{sv.personID}
                      <Link to={{ pathname: "./NewGenrePost", state: sv.name }}>Add New Genre</Link>
                      </Title>
                    <Title><b>Genre ID:</b>{sv.genreID}</Title>
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

export default GetPersonChoice;

