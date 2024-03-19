import React, { useReducer } from "react";
import Square from "./Square";
import Button from "@mui/material/Button";
import { reducer } from "../Store/TicTacToeReducer";
import classes from "../Store/gameStyles.module.css";
import { FiRefreshCw } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import Players from "./Players";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const initialData = {
  firstName: "",
  lastName: "",
  errorMsg: "",
  whoTurn: "",
  result: "",
  turn: true,
  data: ["", "", "", "", "", "", "", "", ""],
  isDisabled: true,
  isWinner: false,
};

function TicTacToe() {
  const [states, dispatch] = useReducer(reducer, initialData);
  const { width, height } = useWindowSize();

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
    <div className="flex flex-col justify-center items-center h-screen w-full gap-[2vw]">
      <Players states={states} dispatch={dispatch} />

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
        <div>
          <Button
            variant="contained"
            color="success"
            onClick={newGame}
            disabled={states.isDisabled}
            className={`!m-3 !bg-[#39bcd4] !text-white ${
              states.isDisabled && "opacity-50"
            }`}
          >
            NEW GAME
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={startTheGame}
            className="!m-3 !bg-[#3989d4] !text-white"
          >
            START
          </Button>

          {states.isWinner && (
            <>
              <Confetti width={width} height={height} recycle={false} />
              <h2 className="text-[3vw] font-bold">{states.result}</h2>
            </>
          )}
        </div>

        <div className="w-full flex items-center justify-between mt-[3vw]">
          <div
            className="bg-zinc-500 inline-block p-3 rounded-full cursor-pointer hover:bg-zinc-400 transition-all duration-500"
            onClick={resetGame}
          >
            <FiRefreshCw className="text-zinc-100" />
          </div>

          {states.data.some((boxes) => boxes !== "") && (
            <div className="inline-block">
              <h2 className="border-2 border-zinc-500 rounded-3xl  text-zinc-500 text-[1vw] uppercase px-4 py-1">
                {states.whoTurn}
              </h2>
            </div>
          )}

          <div className="bg-zinc-500 inline-block p-3 rounded-full cursor-pointer hover:bg-zinc-400 transition-all duration-500">
            <IoMdSettings className="text-zinc-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
