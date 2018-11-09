import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAvailablePlayers } from '../share/module/getPlayers';

import SearchBox from './components/SearchBox';
import Loader from '../share/component/Loader';
import PlayerTable from './components/PlayerTable';

import './home.scss';
class Home extends Component {
  state = {
    playerName: ''
  }
  componentWillMount() {
   this.props.player.results.length === 0 && this.props.getAvailablePlayers();
  }

  searchPlayer(text) {
    this.setState({ playerName: text.toLowerCase() })
  }

  searchResult() {
    return this.props.player.loading || !this.state.playerName ? [] :
      this.props.player.results.slice(0, 200).filter(
        player => player.Name.toLowerCase().includes(this.state.playerName)
      )
  }

  render() {
    console.log(this.props)
    if (this.props.player.loading) return <Loader />

    const filterTable = {
      default: 'default',
      Name: 'name',
      Team: 'team',
      Age: 'age',
      Number: 'number',
      Position: 'position',
      Weight: 'weight'
    }
    return (
      <div className="home__container">
        <SearchBox
          onSearch={this.searchPlayer.bind(this)}
          results={this.searchResult()}
        /> 

        <PlayerTable
          results={this.props.player.results}
          filter={filterTable}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => {
  return {
    player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAvailablePlayers: () => dispatch(getAvailablePlayers(dispatch))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
