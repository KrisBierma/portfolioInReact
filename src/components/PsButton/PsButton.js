import React from 'react';
import './PsButton.css';

export const PsButton = (props) => {
  return (
    <button class='psButton' id={props.id} onClick={props.changePage}>
    {props.title}</button>
  )
}
