/** @format */

import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
      <div>
        <h1>Hats Page</h1>
      </div>
  )
}

const ErrorPage = () => {
  return (
      <div>
        <h1>Error 404: Page not found</h1>
      </div>
  )
}

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='*/hats' component={HatsPage}></Route>
                <Route path='*' component={ErrorPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
