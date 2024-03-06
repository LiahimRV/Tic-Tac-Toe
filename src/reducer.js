export const initialState = {
  board: Array(9).fill(null),
  player: "X",
  winner: null,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOARD":
      return { ...state, board: action.payload };
    case "SET_PLAYER":
      return { ...state, player: action.payload };
    case "SET_WINNER":
      return { ...state, winner: action.payload };
    default:
      return state;
  }
};
