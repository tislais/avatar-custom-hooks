import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';

function App() {
  return (
    <>
        <Switch>
          <Route path="/" exact component={CharacterList} />

          {/* <Route path="/character/:id"
            component={CharacterDetail}
            /> */}

        </Switch>
    </>
  );
}

export default App;
