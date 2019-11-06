import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button className="operator-buttons">
        <span>{props.button.char}</span>
      </button>
    </>
  );
};
export default OperatorButton;
