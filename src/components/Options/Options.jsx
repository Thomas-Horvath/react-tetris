import React, { Component } from 'react';
import './Options.css';

class Options extends Component {
  render() {
    return (
      <div className='options'>
        <button onClick={this.props.onStart} className='options-button'>Start Game</button>
        <button className='options-button'>Pause</button>
      </div>
    )
  }
}

export default Options;