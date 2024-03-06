import React from "react";
import styles from "./Game.module.css";
import { Board } from "../Board/Board";
import { HandleCellClick } from "./Handle-cell";
import { useSelector } from "react-redux";
import { selectBoard, selectPlayer, selectWinner } from "../selectors";
import { setBoard, setWinner } from "../ActionsData";
import { useDispatch } from "react-redux";

export const Game = () => {
  const dispatch = useDispatch();

  const board = useSelector(selectBoard);
  const player = useSelector(selectPlayer);
  const winner = useSelector(selectWinner);

  const startNewGame = () => {
    dispatch(setBoard(Array(9).fill(null)));
    dispatch(setWinner(null));
  };

  return (
    <>
      <div className={styles.game}>
        <p className={styles.info_game}>
          {winner ? `Winner: ${winner}` : `Turn: ${player}`}
        </p>
        <Board
          squares={board}
          click={(index) =>
            HandleCellClick(index, {
              winner,
              board,
              player,
              setBoard,
              setWinner,
              dispatch,
            })
          }
        />
        <button className={styles.btnPlayAgain} onClick={startNewGame}>
          Play again!
        </button>
      </div>
    </>
  );
};
