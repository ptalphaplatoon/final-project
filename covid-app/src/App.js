import React from 'react';
import { Route, Switch } from 'react-router-dom'
import statePage from './components/State_Page/State-Page.js'


function App() {
  return (
    
    <div >
      <Switch>
        <Route exact path="/state-page" component={statePage} />
      </Switch>
    </div>
    
  );
}

export default App;