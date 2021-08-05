import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={CharacterList} />

      <Route path="/character/:id" component={CharacterDetails} />

    </Switch>
  );
}

export default App;
