import React, { Component } from 'react';
import './GameBoard.css';
import Tetromino from '../Tetromino/Tetromino';


const BOARD_WIDTH = 10;
const BORDE_HEIGHT = 20;



class GameBoard extends Component {
    render() {
        return (
            <div className='game-board'>
                <Tetromino shape="L" rotateValue={0} />
                <Tetromino shape="L" rotateValue={1} />
                <Tetromino shape="L" rotateValue={2} />
                <Tetromino shape="I" rotateValue={1} />
                <Tetromino shape="Z" rotateValue={0} />
                <Tetromino shape="Z" rotateValue={1} />
                <Tetromino shape="Z" rotateValue={2} />
                <Tetromino shape="T" rotateValue={0} />
                <Tetromino shape="T" rotateValue={1} />
                <Tetromino shape="T" rotateValue={2} />
                <Tetromino shape="T" rotateValue={3} />
            </div>
        );
    }
}

export default GameBoard;