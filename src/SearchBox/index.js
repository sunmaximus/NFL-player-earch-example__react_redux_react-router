import React, { Component } from 'react';

import './searchbox.scss';

class SearchBox extends Component {
  render() {
    return (
      <div className='searchbox__container'>
        <input
          className='searchbox__input'
          onChange={(event) => console.log(event.target.value) }
          placeholder={'search player...'}
        />

        <div className='searchbox__results'>
        </div>
      </div>

    );
  }
}

export default SearchBox;