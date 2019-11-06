import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = props => {
  console.log("this is" + props);
  // STEP 2 - add the imported data to state
  const [numberCount] = useState(numbers);
  return (
    <div className="numberdiv">
      {numberCount.map(number => (
        <NumberButton key={number} text={number} addNumber={props.addNumber} />
      ))}
    </div>
  );
};
export default Numbers;
