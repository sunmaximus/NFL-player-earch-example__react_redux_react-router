import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

import { getAvailablePlayers } from '../Home/module/getPlayers';
import Loader from '../share/component/Loader';

import './player.scss';

class Player extends Component {
  componentWillMount() {
    _.isEmpty(this.props.lookupResults) && this.props.getAvailablePlayers();
  }

  render () {
    const playerInfo = this.props.playerInfo[this.props.match.params.playerId];
    if (this.props.loading || !playerInfo) return <Loader />

    
    return (
    <div className='player__container'>
      <img className='player__image' src={playerInfo.PhotoUrl} alt={playerInfo.Age} />
      <h3 className='player__title'>
        {playerInfo.Name}
      </h3>
      <div className='player__info'>Age: {playerInfo.Age}</div>
      <div className='player__info'>Team: {playerInfo.Team}</div>
      <div className='player__info'>Position: {playerInfo.Position}</div>
      <div className='player__info'>Number: {playerInfo.Number}</div>
      <div className='player__info'>Weight: {playerInfo.Weight}</div>
      <Link to='/'><Button className='player__button'>Go Back</Button></Link>
    </div>)    
  }
};


const mapStateToProps = ({ player }) => {
  return {
    loading: player.loading,
    playerInfo: player.lookupResults,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAvailablePlayers: () => dispatch(getAvailablePlayers(dispatch)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
