import React, { useReducer } from "react";
import Square from "./Square";
import Button from "@mui/material/Button";
import { reducer } from "../Store/TicTacToeReducer";
import classes from "../Store/gameStyles.module.css";

const initialData = {
  firstName: "",
  lastName: "",
  errorMsg: "",
  whoTurn: "",
  winner: "",
  turn: true,
  data: ["", "", "", "", "", "", "", "", ""],
  isDisabled: true,
};

function TicTacToe() {
  const [states, dispatch] = useReducer(reducer, initialData);

  const startTheGame = function () {
    if (states.firstName && states.lastName) {
      dispatch({ type: "START" });
    } else {
      dispatch({ type: "ERROR_MSG" });
    }
  };

  const newGame = function () {
    if (states.firstName && states.lastName) {
      dispatch({ type: "NEW_GAME" });
    } else {
      dispatch({ type: "ERROR_MSG" });
    }
  };

  const handleClick = function (id) {
    if (states.firstName !== "" && states.lastName !== "") {
      if (states.data[id]) return;
      states.data[id] = states.turn ? "X" : "0";
      dispatch({ type: "CHECK_WINNER" });

      if (
        (states.data[0] &&
          states.data[0] === states.data[1] &&
          states.data[1] === states.data[2]) ||
        (states.data[3] &&
          states.data[3] === states.data[4] &&
          states.data[4] === states.data[5]) ||
        (states.data[6] &&
          states.data[6] === states.data[7] &&
          states.data[7] === states.data[8]) ||
        (states.data[0] &&
          states.data[0] === states.data[3] &&
          states.data[3] === states.data[6]) ||
        (states.data[1] &&
          states.data[1] === states.data[4] &&
          states.data[4] === states.data[7]) ||
        (states.data[2] &&
          states.data[2] === states.data[5] &&
          states.data[5] === states.data[8]) ||
        (states.data[0] &&
          states.data[0] === states.data[4] &&
          states.data[4] === states.data[8]) ||
        (states.data[2] &&
          states.data[2] === states.data[4] &&
          states.data[4] === states.data[6])
      ) {
        dispatch({ type: "WINNER" });
      } else {
        let draw = states.data.every((boxes) => boxes !== "");
        if (draw) {
          dispatch({ type: "DRAW" });
        }
      }
    }
  };

  const resetGame = function () {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "20px", margin: "auto" }}>
        <h1>Player's name:</h1>
        <input
          placeholder="Player 1"
          value={states.firstName}
          onChange={(e) =>
            dispatch({ type: "FIRST_NAME", payload: e.target.value })
          }
          className={classes.input}
        />
        <br />
        <br />
        <input
          placeholder="Player 2"
          value={states.lastName}
          onChange={(e) =>
            dispatch({ type: "LAST_NAME", payload: e.target.value })
          }
          className={classes.input}
        />

        <p style={{ color: "red" }}>{states.errorMsg}</p>

        <Button
          variant="contained"
          color="success"
          onClick={newGame}
          disabled={states.isDisabled}
          className={classes.initial_button}
        >
          NEW GAME
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={startTheGame}
          className={classes.initial_button}
        >
          START
        </Button>

        <br />
      </div>

      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        <div>
          <div className={classes.row}>
            <Square
              handleClick={handleClick.bind(null, 0)}
              data={states.data[0]}
              isDisabled={states.isDisabled}
            />
            <Square
              handleClick={handleClick.bind(null, 1)}
              data={states.data[1]}
              isDisabled={states.isDisabled}
            />
            <Square
              handleClick={handleClick.bind(null, 2)}
              data={states.data[2]}
              isDisabled={states.isDisabled}
            />
          </div>
          <div className={classes.row}>
            <Square
              handleClick={handleClick.bind(null, 3)}
              data={states.data[3]}
              isDisabled={states.isDisabled}
            />
            <Square
              handleClick={handleClick.bind(null, 4)}
              data={states.data[4]}
              isDisabled={states.isDisabled}
            />
            <Square
              handleClick={handleClick.bind(null, 5)}
              data={states.data[5]}
              isDisabled={states.isDisabled}
            />
          </div>
          <div className={classes.row}>
            <Square
              handleClick={handleClick.bind(null, 6)}
              data={states.data[6]}
              isDisabled={states.isDisabled}
            />
            <Square
              handleClick={handleClick.bind(null, 7)}
              data={states.data[7]}
              isDisabled={states.isDisabled}
            />
            <Square
              handleClick={handleClick.bind(null, 8)}
              data={states.data[8]}
              isDisabled={states.isDisabled}
            />
          </div>
        </div>

        <div>
          <h2>Who's Turn?</h2>
          <h4 className={classes.turn}>
            <i>{states.whoTurn}</i>
          </h4>
        </div>
      </div>

      <p className={classes.winner}>
        <span>{states.winner}</span>
      </p>

      <Button color="primary" variant="contained" onClick={resetGame}>
        RESET
      </Button>
    </div>
  );
}

export default TicTacToe;
