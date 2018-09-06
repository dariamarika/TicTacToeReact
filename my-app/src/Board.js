import React, { Component } from 'react';
import './index.css';

class Board extends Component {    
    renderSquare(i) {
        return (
            <Square
                key={i}                
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderSquares(row) {
        let squares = [];
        const squareNumbers = [1, 2, 3];
        squareNumbers.map((number) =>
            squares.push(this.renderSquare(row+number))
        );
        return squares;
    }

    createBoard() {
        let board = [];
        const rows = ['a', 'b', 'c'];
        rows.map((row) =>
            board.push(
                <div key={row} className="board-row">
                    {this.renderSquares(row)}
                </div>
            )
        );
       
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