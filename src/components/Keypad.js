import React from "react";
import Key from "./Key";
import { playTone } from "../lib/DtmfTone";
import keys from "../constants/keys";
import "./keypad.css";

export default () => {
  return (
    <div className="keypad">
      {keys.map(key => {
        const frequencies = [key.frequencies.high, key.frequencies.low];

        return (
          <Key
            key={key.id}
            onClick={() => playTone(frequencies)}
          >
            {key.label}
          </Key>
        );
      })}
    </div>
  );
};
