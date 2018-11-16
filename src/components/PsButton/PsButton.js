import React from 'react';
import './PsButton.css';
import { BrowserRouter as Link } from 'react-router-dom';

export const PsButton = (props) => {
  return (
    <button className='psButton' id={props.id} onClick={() => props.changePage(props.id)}><Link to='/psalmCompare' >
    {props.children}</Link></button>
  )
}
