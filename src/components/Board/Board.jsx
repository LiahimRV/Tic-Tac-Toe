import React from "react";
import style from "./Board.module.css";
import { Cell } from "../Cell/Cell";

export const Board = ({ squares, click }) => {
  return (
    <div className={style.board}>
      {squares.map((square, i) => (
        <Cell key={i} value={square} onClick={() => click(i)} />
      ))}
    </div>
  );
};
