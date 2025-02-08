import React, { Component } from 'react';
import './GamesStats.css';
import Tetromino from '../Tetromino/Tetromino';

class GamesStats extends Component {



  render() {
    return (
      <div className='games-stats'>
        <Tetromino shape="O" rotateValue={0} />
      </div>
    )
  }
}

export default GamesStats;