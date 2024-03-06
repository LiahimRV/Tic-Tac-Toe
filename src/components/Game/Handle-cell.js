import { calculatedWinner } from "../../logicFunc";
import { setPlayer } from "../ActionsData";

export const HandleCellClick = (
  index,
  { winner, board, player, setBoard, setWinner, dispatch }
) => {
  if (winner || board[index]) return;

  const newBoard = [...board];
  newBoard[index] = player;
  dispatch(setBoard(newBoard));

  const playerTurn = player === "X" ? "O" : "X";
  dispatch(setPlayer(playerTurn));

  if (calculatedWinner(newBoard)) {
    dispatch(setWinner(player));
  }
};
