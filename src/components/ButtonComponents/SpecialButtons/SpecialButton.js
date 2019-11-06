import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button
        className="special-buttons"
        onClick={() => {
          if (props.button === "C") {
            props.clearNumber();
          }
        }}
      >
        <span>{props.button}</span>
      </button>
    </>
  );
};
export default SpecialButton;
