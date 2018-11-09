import React, { Component } from 'react';

import './searchbox.scss';

class SearchBox extends Component {
  renderResults() {
    return this.props.results && this.props.results.slice(0, 10).map(
      player => (
        <div 
          key={player.PlayerID}
          className='searchbox__results-content'
        >
          {`${player.FirstName} ${player.LastName}`}
        </div>
      )
    )
  }

  render() {
    const { onSearch } = this.props;
    return (
      <div className='searchbox__container'>
        <input
          className='searchbox__input'
          onChange={(event) => onSearch && onSearch(event.target.value) }
          placeholder={'search player...'}
        />

        <div className='searchbox__results'>
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

export default SearchBox;