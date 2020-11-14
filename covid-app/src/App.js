import React from 'react';
import { Route, Switch, Router } from 'react-router-dom'
import statePage from './components/State_Page/State-Page.js'


function App() {
  return (
    
    <div >
      <Router>
        <Route exact path="/state-page" component={statePage} />
      </Router>
    </div>
    
  );
}

export default App;