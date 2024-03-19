import React from "react";

function Players({ states, dispatch }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[2vw] mb-2 font-bold text-[#3989d4] [text-shadow:2px_3px_4px_rgba(57,188,212,0.87)] shadow-red-500">
        TicTacToe
      </h1>
      <input
        placeholder="Player 1"
        value={states.firstName}
        onChange={(e) =>
          dispatch({ type: "FIRST_NAME", payload: e.target.value })
        }
        className="bg-zinc-100 p-2 rounded-lg m-2.5"
      />

      <input
        placeholder="Player 2"
        value={states.lastName}
        onChange={(e) =>
          dispatch({ type: "LAST_NAME", payload: e.target.value })
        }
        className="bg-zinc-100 p-2 rounded-lg m-2.5"
      />

      <p className="text-red-500">{states.errorMsg}</p>
    </div>
  );
}

export default Players;
