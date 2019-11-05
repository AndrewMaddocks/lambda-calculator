import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button className="special-buttons">
        <span>{props.button}</span>
      </button>
    </>
  );
};
export default SpecialButton;
