import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import Score from './components/Score/Score.jsx';
import GamesStats from './components/GamesStats/GamesStats.jsx';
import Options from './components/Options/Options.jsx';

class App extends React.Component {

  startGame() {
    alert('A játék kezdődik');
  }
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (keys.includes(e.key)) {
        console.log(e.key);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className='header'>Tetris</h1>

        <GameBoard />
        <Score />
        <GamesStats />
        <Options onStart={this.startGame} />
      </div>
    );
  }
}

export default App;
