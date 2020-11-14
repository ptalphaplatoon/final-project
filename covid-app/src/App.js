import React from 'react';
import { Route, Switch } from 'react-router-dom'
import statePage from "./components/State_Page/State_Page.js"


function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="state_page" component={statePage} />
      </div>
    </Switch>
  );
}

export default App;