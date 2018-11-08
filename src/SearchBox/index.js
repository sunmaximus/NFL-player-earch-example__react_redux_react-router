import React, { Component } from 'react';

import './searchbox.scss';

class SearchBox extends Component {
  render() {
    return (
      <input
        className='searchbox__input'
        onChange={(event) => console.log(event.target.value) }
        placeholder={'search player...'}
      />
    );
  }
}

export default SearchBox;