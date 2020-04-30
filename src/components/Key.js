import React, { useState } from "react";
import classnames from "classnames";

export default props => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const mouseEventHandler = e => {
    const isMouseDownEvent = e.type === "mousedown";
    setIsKeyPressed(isMouseDownEvent);
    const eventType = isMouseDownEvent ? "onMouseDown" : "onMouseUp";
    const eventHandler = props[eventType];
    eventHandler();
  };

  const keyClass = classnames("key", { "key-down": isKeyPressed });

  return (
    <button
      className={keyClass}
      onMouseDown={mouseEventHandler}
      onMouseUp={mouseEventHandler}
    >
      {props.children}
    </button>
  );
};
