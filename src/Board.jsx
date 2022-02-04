import React from "react";
import Square from "./Square";
import { css } from "@emotion/css";
import { calcwinner } from "./resFnc";

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    isPlayerX: true
  };
  handleClick = (index) => {
    const squares = this.state.squares.slice();
    if (squares[index] || calcwinner(squares)) return;
    squares[index] = this.state.isPlayerX ? "X" : "O";
    this.setState({ squares: squares, isPlayerX: !this.state.isPlayerX });
  };
  render() {
    const winner = calcwinner(this.state.squares);
    let status = "";
    if (winner) {
      status = "winner is :" + winner;
    } else if (this.state.isPlayerX) {
      status = "Next player is :X";
    } else {
      status = "Next player is:O";
    }
    return (
      <div>
        <div
          className={css`
            position: flex;
            margin-bottom: 5px;
          `}
        >
          {status}
        </div>
        <div
          className={css`
            ::after {
              clear: both;
              content: " ";
              display: table;
            }
          `}
        >
          <Square
            value={this.state.squares[0]}
            onClick={() => this.handleClick(0)}
          />
          <Square
            value={this.state.squares[1]}
            onClick={() => this.handleClick(1)}
          />
          <Square
            value={this.state.squares[2]}
            onClick={() => this.handleClick(2)}
          />
        </div>
        <div
          className={css`
            ::after {
              clear: both;
              content: " ";
              display: table;
            }
          `}
        >
          <Square
            value={this.state.squares[3]}
            onClick={() => this.handleClick(3)}
          />
          <Square
            value={this.state.squares[4]}
            onClick={() => this.handleClick(4)}
          />
          <Square
            value={this.state.squares[5]}
            onClick={() => this.handleClick(5)}
          />
        </div>
        <div
          className={css`
            ::after {
              clear: both;
              content: " ";
              display: table;
            }
          `}
        >
          <Square
            value={this.state.squares[6]}
            onClick={() => this.handleClick(6)}
          />
          <Square
            value={this.state.squares[7]}
            onClick={() => this.handleClick(7)}
          />
          <Square
            value={this.state.squares[8]}
            onClick={() => this.handleClick(8)}
          />
        </div>
      </div>
    );
  }
}
export default Board;
