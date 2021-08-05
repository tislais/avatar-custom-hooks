import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';
import Header from './Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={CharacterList} />
          <Route path="/character/:id" component={CharacterDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
