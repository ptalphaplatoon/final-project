import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import statePage from './components/State_Page/State-Page.js'



function App() {
  
 
  
  return (
    <div >
      <Router>
        <Link to='/state-page'>State Page Test</Link>
        <Switch>
          <Route exact path="/state-page" component={statePage} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;