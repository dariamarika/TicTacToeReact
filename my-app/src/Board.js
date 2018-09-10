import React, { Component } from 'react';
import './index.css';

class Board extends Component {    
    renderSquare(i) {
        return (
            <Square
                key={'j'+i}                
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderSquares() {
        let squares = [];
        for (let j = 0; j < 3; j++) {
            squares.push(this.renderSquare(j));
        }
        return squares;
    }

    createBoard() {
        let board = [];
        for (let i = 0; i < 3; i++) {
            board.push(
                <div key={i} className="board-row">
                    {this.renderSquares()}
                </div>
            );
        }
        return board;
    }

    render() {
        return (
            <div>
                {this.createBoard()}                
            </div>
        );
    }
}

export default Board;

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}