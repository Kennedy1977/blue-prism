import React from "react";

export const Button = (props) => {
  return (
    <button key={props.index} className={props.data.css}>
      {props.data.label}
    </button>
  );
};
