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
      result: "",
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
      result: `Winner: ${!turn ? firstName : lastName} 🎉`,
      turn: true,
      isDisabled: true,
      isWinner: true,
    };
  }

  if (action.type === "RESET_GAME") {
    return {
      ...state,
      data: ["", "", "", "", "", "", "", "", ""],
      result: "",
      errorMsg: "",
      whoTurn: "",
      turn: true,
    };
  }

  if (action.type === "DRAW") {
    return {
      ...state,
      data: ["", "", "", "", "", "", "", "", ""],
      result: `Draw! Play again`,
      turn: true,
      isWinner: true,
    };
  }

  if (action.type === "START") {
    return {
      ...state,
      data: ["", "", "", "", "", "", "", "", ""],
      whoTurn: ``,
      errorMsg: "",
      isDisabled: false,
      result: "",
    };
  }
};
