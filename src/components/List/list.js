import React from "react";
import "./list.css";

export const List = ({children}) => {
  return (
    <div className="stay">
      <ul className = "port-tags-wrapper">
        {children}
      </ul>
  </div>
  )};
