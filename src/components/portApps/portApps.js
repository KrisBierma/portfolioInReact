import React from "react";
import "./portApps.css";

// pics of each project; includes title
const PortApp = props => (
  <div className = "card mx-auto" onClick={() => props.showModal(props.title, props.body, props.github, props.site, props.image, props.id)}>
    <img className = "card-img portPic" src = {props.image} alt = {props.alt}></img>
    <div className = "card-img-overlay">
      <p className = "card-title">{props.title}</p>
    </div>
    <div className = "stay">
      <ul className = "port-tags-wrapper">

      </ul>
    </div>
  </div>
);

export default PortApp;