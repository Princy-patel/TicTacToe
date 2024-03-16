import React from "react";
import classes from "./../Store/gameStyles.module.css";

function Square({ handleClick, data, isDisabled }) {
  return (
    <>
      <button
        onClick={handleClick}
        className={`${classes.Square} ${
          isDisabled ? `${classes.disabled}` : `${classes.active}`
        }`}
        disabled={isDisabled}
      >
        {data}
      </button>
    </>
  );
}

export default Square;
