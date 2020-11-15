import React from 'react';

import { Route, Switch } from 'react-router-dom'
import './App.css'


import StatePage from './components/State_Page/State-Page.js'
import HomePage from './pages/HomePage/HomePage.js'
import NavBar from './components/NavBar/NavBar.js'



function App(props) {
  
  const renderStatePage =(props)=>{
    return(
      <StatePage/>
    )
  }

  const renderHomePage =(props)=>{
    return(
      <HomePage/>
    )
  }
  
  return (

    <Switch>
      <div id={'app-container'}>
        <div className="nav-bar">
          <NavBar/>
        </div>
  {/*----------------------------------------------------- */}
        <div className={"body-container"}>
          <Route exact path="/" render={renderHomePage} />
          <Route exact path="/state-page" render={renderStatePage} />
        </div>
      </div>
    </Switch>

    
  );
}

export default App;