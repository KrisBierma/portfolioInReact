import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
  <button className = "btn portButtons" id={props.id}>
    {props.children}
  </button>
  )
};
