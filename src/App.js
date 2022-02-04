import React from "react";
import "./styles.css";
import Board from "./Board";
import { css } from "@emotion/css";

export default function App() {
  return (
    <>
      <header
        className={css`
          color: grey;
          font-size: 40px;
          text-align: center;
          padding: 5px;
        `}
      >
        Tic Tac Toe{" "}
      </header>
      <div className="game">
        <div className="game=info">
          <Board className="board" />
        </div>
      </div>
      <footer>
        <h3
          className={css`
            color: lightseagreen;
            text-align: center;
            margin-top: 17%;
          `}
        >
          {" "}
          Created By Harsh Somya
        </h3>
      </footer>
    </>
  );
}
