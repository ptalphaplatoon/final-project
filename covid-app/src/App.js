import React from 'react';
import { Route, Switch } from 'react-router-dom'

import StatePage from './components/State_Page/State-Page.js'
import HomePage from './pages/HomePage/HomePage.js'



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
  console.log(props)
  return (
    <div >
      
        <Switch>
          <Route exact path="/" render={renderHomePage} />
          <Route exact path="/state-page" render={renderStatePage} />
        </Switch>
      
    </div>
    
  );
}

export default App;