import React from "react";
import Key from "./Key";
import frequencies from "../constants/frequencies";
import { startTone, stopTone } from "../lib/DtmfTone";

export default props => {
  const isX = props.axis === "x";
  const frequencyGroup = isX ? frequencies.high : frequencies.low;

  return (
    <div className={`axis-keys axis-${isX ? "x" : "y"}`}>
      {frequencyGroup.map(frequency => {
        return (
          <Key
            key={`axisKey-${frequency}`}
            onMouseDown={() => startTone([frequency])}
            onMouseUp={() => stopTone()}
          >
            {frequency}Hz
          </Key>
        );
      })}
    </div>
  );
};
