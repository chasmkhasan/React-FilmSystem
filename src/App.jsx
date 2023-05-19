import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Person from './Pages/Person';
import InvalidPath from './Pages/NotFound';
import Genre from './Pages/Genre';
import GetPersonChoice from './Pages/GetPersonChoice';
import MovieLinkPost from './Pages/MovieLinkPost';
import MovieRating from './Pages/MovieRatingPost';
import NewGenrePost from './Pages/NewGenrePost';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
`;

function App() {
 
  return (
    <Router>
      <Container>
        <h2>Welcome to App Component ...</h2>
        <ul>
          <li>
            <a href='/Person'>Person List</a>
          </li>
          <li>
            <a href='/Genre'>Genre List</a>
          </li>
        </ul>
        <Switch>
          <Route exact path="/Person" component={Person}></Route>
          <Route path="/Genre" component={Genre}></Route>
          <Route path="/GetPersonChoice" component={GetPersonChoice}></Route>
          <Route path="/MovieLinkPost" component={MovieLinkPost}></Route>
          <Route path="/MovieRatingPost" component={MovieRating}></Route>
          <Route path="/NewGenrePost" component={NewGenrePost}></Route>
          <Route component={InvalidPath}></Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App;
