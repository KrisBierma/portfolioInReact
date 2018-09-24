import React from "react";
import "./list.css";

export const ListTech = (props) => {
  return(
    <li id={props.id} className={props.classN}>{props.children}</li> 
  )};
