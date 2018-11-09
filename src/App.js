import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home';
import Player from './Player';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/player/:playerId" component={Player} />
      </div>
    </Router>
  );
}

export default App;
