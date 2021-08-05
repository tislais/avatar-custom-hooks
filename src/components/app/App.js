import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/character/:id" component={CharacterDetails} />
      </Switch>
    </>
  );
}

export default App;
