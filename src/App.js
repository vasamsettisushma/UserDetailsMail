import {BrowserRouter, Route, Switch} from 'react-router-dom'

import "./App.css"; 
import React from 'react';
import Header from './components/Header'
import EmailForm from "./components/EmailForm";
import Home from './components/Home'
const App = () => (
<div className = "App">

      <h1>Send Email from react</h1>
      <BrowserRouter>
    <Header />
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/Email" component={EmailForm} />
    </Switch>
  </BrowserRouter>
    </div>
  
)
  
    


export default App; 