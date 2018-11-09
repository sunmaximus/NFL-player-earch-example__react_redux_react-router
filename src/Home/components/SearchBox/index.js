import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './searchbox.scss';

class SearchBox extends Component {
  renderResults() {
    return this.props.results && this.props.results.slice(0, 10).map(
      player => (
        <Link 
          key={player.PlayerID}
          className='searchbox__results-content'
          to={`/player/${player.PlayerID}`}
        >
          {`${player.FirstName} ${player.LastName}`}
        </Link>
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