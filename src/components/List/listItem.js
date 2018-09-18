import React from "react";
import "./list.css";

export const ListItem = (props) => {
  return(
<li id={`li${props.id}`} className="port-tags" onClick={() => props.hideBtn(props.id)}>{props.children}</li> 
  )};
