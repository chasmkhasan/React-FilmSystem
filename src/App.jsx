import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Person from './Pages/Person';
import Layout from './assets/components/shared/Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Layout>
        <Person/>
    </Layout>
    
  )
}

export default App;
