import React from "react";
import "./portApps.css";
import {List} from "../List";

// pics of each project; includes title
const PortApp = (props) => (
  <div className = {`card mx-auto ${props.newClass}`} onClick={() => props.showModal(props.title, props.body, props.github, props.site, props.image, props.id, props.alt)}>
    <img className = "card-img portPic" src = {props.image} alt = {props.alt}></img>
    <div className = "card-img-overlay">
      <p className = "card-title">{props.title}</p>
    </div>
    {/* <div className = "stay"> */}
    <List>
      {props.children}
      {/* {props.listItems} */}
      {/* <ListItem>

      </ListItem> */}
    </List>
      {/* <ul className = "port-tags-wrapper"> */}
        {/* {children} */}
      {/* </ul> */}
    {/* </div> */}
  </div>
);

export default PortApp;