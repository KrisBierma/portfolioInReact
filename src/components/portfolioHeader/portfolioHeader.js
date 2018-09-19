import React from "react";
import {Collapse} from "reactstrap";
import "./portfolioHeader.css";

const PortfolioHeader = (props) => (

  <div>
    <div className="row sectionPort">
      <h3>Portfolio</h3>
      <div className="btn-collapse">
        <button onClick={() => props.toggleMenu()} className="btn" >
          <span><i className="fal fal-port fa-bars fa"></i></span>
        </button>
        <Collapse id="portCollapse" isOpen={props.isOpen}>
          <ul className="text-right float-right pr-3 listStyle">
            {props.children[0]}
          </ul>        
        </Collapse>
      </div>
    </div>

    <div className="center">
      {props.children[1]}
    </div>
  </div>
);

export default PortfolioHeader;