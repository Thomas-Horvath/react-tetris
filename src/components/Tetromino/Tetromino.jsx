import React, { Component } from 'react';
import './Tetromino.css';

const TETROMINOS = {
    I: [
        [
            [true],
            [true],
            [true],
            [true]
        ],
        [
            [true, true, true, true]
        ]
    ],
    O: [
        [
            [true, true],
            [true, true]
        ]
    ],
    L: [
        [
            [true, false],
            [true, false],
            [true, true]
        ],
        [
            [true, true, true],
            [true, false, false]

        ],
        [
            [true, true],
            [false, true],
            [false, true]
        ],
        [
            [false, false, true],
            [true, true, true]
        ]
    ],
    Z: [
        [
            [false, true],
            [true, true],
            [true, false]
        ],
        [
            [true, true, false],
            [false, true, true]
        ],
        [
            [true, false],
            [true, true],
            [false, true]
        ],
        [
            [false, true, true],
            [true, true, false]
        ]

    ],
    T : [
        [
            [false, true, false],
            [true, true, true]
        ],
        [
            [true,false],
            [true,true],
            [true,false]
        ],
        [
            [true, true, true],
            [false, true, false]
        ],
        [
            [false,true],
            [true,true],
            [false, true]
        ]
        
    ]

}


class Tetromino extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shape: props.shape,
            rotateValue: props.rotateValue,  // 0: base, 1: clockwise 90deg, 2: clockwise 180deg, 3: clockwise 270deg

        };
    }

    
    getCellMarkup(cell, index) {
        let classList = `tetromino-square ${cell ? this.state.shape : 'empty'}`;
        return <div className={classList} key={index}></div>
    }

    render() {
        const tetrominoPatterns = TETROMINOS[this.state.shape] ?? [];
        const tetrominoPattern = tetrominoPatterns[this.state.rotateValue] ?? [];
        const rows = tetrominoPattern.map(
            (row , index) => (
                <div className="tetromino-row" key={index}>
                    {row.map((cell,index )=> this.getCellMarkup(cell, index))}
                </div>
            )
        )
        return (
            <>
                {rows}
            </>
        );
    }
}

export default Tetromino;