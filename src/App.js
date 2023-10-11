import {BrowserRouter, Route, Switch} from 'react-router-dom'

import "./App.css"; 
import React from 'react';
import Header from './components/Header'
import New from "./components/New";
import Home from './components/Home'
const App = () => (
<div className = "App">

      <h1>Sending Email with React and Node JS</h1>
      <BrowserRouter>
    <Header />
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/send-email" component={New} />
    </Switch>
  </BrowserRouter>
    </div>
  
)
  
    


export default App; 