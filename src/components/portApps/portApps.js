import React from "react";
import "./portApps.css";
import {List} from "../List";

// pics of each project; includes title
const PortApp = (props) => (
  <div className = {`card mx-auto ${props.project.newClass}`} onClick={() => props.showModal(props.project.title, props.project.body, props.project.github, props.project.site, props.image, props.id, props.project.alt)}>
    <img className = "card-img portPic" src = {props.image} alt = {props.project.alt}></img>
    <div className = "card-img-overlay">
      <p className = "card-title">{props.project.title}</p>
    </div>
    <List> 
      {props.children} 
    </List>
  </div>
);

export default PortApp;