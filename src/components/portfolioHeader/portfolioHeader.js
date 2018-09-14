import React from "react";
import "./portfolioHeader.css";

const PortfolioHeader = (props) => (

  // TO-Do:
// make button icon images show up

  <div>
    <div className="row sectionPort">
      <h3>Portfolio</h3>
      <div className="btn-collapse">
        <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse" data-target=".portfolio-collapse" aria-controls="portCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="fal fal-port fa-bars fa"></i></span>
        </button>
        <div className="collapse portfolio-collapse justify-content-end" id="portCollapse">
          <ul className="text-right float-right pr-3">
            {props.children[0]}
          </ul>
        </div>
      </div>
    </div>

    <div className="center">
      {/* <div className="btn-group" role="group" aria-label="App technologies"> */}
        {props.children[1]}
      {/* </div> */}
    </div>
  </div>
);

export default PortfolioHeader;