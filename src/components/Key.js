import React, { useState } from "react";
import classnames from "classnames";

export default props => {
  const onClickHandler = e => {
    props.onClick();
  };

  const keyClass = classnames("key");

  return (
    <button
      className={keyClass}
      onClick={onClickHandler}
    >
      {props.children}
    </button>
  );
};
