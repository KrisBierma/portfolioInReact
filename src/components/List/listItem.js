import React from "react";
import "./list.css";

export const ListItem = (props) => {
  return(
    <li id={props.id} className={props.classN} onClick={() => props.hideBtn(props.id)}>{props.children}</li> 
  )};
