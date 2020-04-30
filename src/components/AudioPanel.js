import React from "react";
import Keypad from "./Keypad";
import AxisKeys from "./AxisKeys";

export default props => {
  return (
    <div className="audio-panel">
      <AxisKeys axis="x" />
      <AxisKeys axis="y" />
      <Keypad />
    </div>
  );
};
