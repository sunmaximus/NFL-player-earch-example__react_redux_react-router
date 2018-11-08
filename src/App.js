import React, { Component } from 'react';

import SearchBox from './SearchBox';
import './app.scss';
class App extends Component {
  render() {
    return (
      <div className="app__container">
        <SearchBox />
      </div>
    );
  }
}

export default App;
