import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CharacterList} />
        <Route path="/character/:id" component={CharacterDetails} />
      </Switch>
    </Router>
  );
}

export default App;
