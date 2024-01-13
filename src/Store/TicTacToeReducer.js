export const reducer = function (state, action) {
  if (action.type === "FIRST_NAME") {
    return { ...state, firstName: action.payload };
  }

  if (action.type === "LAST_NAME") {
    return { ...state, lastName: action.payload };
  }

  if (action.type === "NEW_GAME") {
    return {
      ...state,
      data: ["", "", "", "", "", "", "", "", ""],
      whoTurn: ``,
      errorMsg: "",
      isDisabled: true,
      winner: "",
      firstName: "",
      lastName: "",
    };
  }

  if (action.type === "ERROR_MSG") {
    return {
      ...state,
      errorMsg: `Enter the players name`,
    };
  }

  if (action.type === "CHECK_WINNER") {
    return {
      ...state,
      data: state.data,
      whoTurn: `${!state.turn ? state.firstName : state.lastName}`,
      turn: !state.turn,
    };
  }

  if (action.type === "WINNER") {
    const { turn, firstName, lastName } = state;
    return {
      ...state,
      whoTurn: `${turn ? firstName : lastName}`,
      winner: `Winner: ${!turn ? firstName : lastName}`,
      turn: true,
      isDisabled: true,
    };
  }

  if (action.type === "RESET_GAME") {
    return {
      ...state,
      data: ["", "", "", "", "", "", "", "", ""],
      winner: "",
      errorMsg: "",
      whoTurn: "",
      turn: true,
    };
  }

  if (action.type === "DRAW") {
    return {
      ...state,
      data: ["", "", "", "", "", "", "", "", ""],
      winner: `Draw! Play again`,
      turn: true,
    };
  }

  if (action.type === "START") {
    return {
      ...state,
      data: ["", "", "", "", "", "", "", "", ""],
      whoTurn: ``,
      errorMsg: "",
      isDisabled: false,
      winner: "",
    };
  }
};
