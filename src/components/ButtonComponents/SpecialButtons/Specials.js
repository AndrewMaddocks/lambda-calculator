import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialCount] = useState(specials);

  return (
    <div className="specialdiv">
      {specialCount.map((button, index) => (
        <SpecialButton key={index} button={button} />
      ))}
    </div>
  );
};
export default Specials;
