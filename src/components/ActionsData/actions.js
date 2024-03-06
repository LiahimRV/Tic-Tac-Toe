export const setBoard = (board) => ({
  type: "SET_BOARD",
  payload: board,
});

export const setPlayer = (player) => ({
  type: "SET_PLAYER",
  payload: player,
});

export const setWinner = (winner) => ({
  type: "SET_WINNER",
  payload: winner,
});
