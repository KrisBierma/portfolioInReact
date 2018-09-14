import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
  <button className = {`btn portButtons ${props.className}`} id={props.id} onClick={() => props.hideBtn(props.id)} >
    {props.children}
  </button>
  )
};
