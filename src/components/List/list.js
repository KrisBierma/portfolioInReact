import React from "react";
import "./list.css";

// list items are in the portApps.js
export const List = ({children}) => {
  return (
    <div className="stay">
      <ul className = "port-tags-wrapper">
        {children}
      </ul>
  </div>
  )};
