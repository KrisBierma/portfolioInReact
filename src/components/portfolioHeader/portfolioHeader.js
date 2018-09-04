import React from "react";
import "./portfolioHeader.css";

const PortfolioHeader = props => (
  <div>
    <div className="row sectionPort">
      <h3>Portfolio</h3>

      {/* btn-menu - show on sm screens*/}
      <div className="btn-collapse">
        <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse" data-target=".portfolio-collapse" aria-controls="portCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="fal fal-port fa-bars fa"></i></span>
        </button>
        
        <div className="collapse portfolio-collapse justify-content-end" id="portCollapse">
          <ul className="text-right float-right pr-3">
            <li id="allHamburger">Show all</li>
            {/* <!-- <li className="portColl" id="javaScript">JavaScript</li> --> */}
            <li className="portColl" id="jQuery">jQuery</li>
            <li className="portColl" id="Node.js">node.js</li>
            {/* <!-- <li className="portColl" id="express">Express</li> --> */}
            <li className="portColl" id="bootstrap">Bootstrap</li>
            <li className="portColl" id="handlebars">Handlebars</li>
            <li className="portColl" id="react">React</li>
            <li className="portColl" id="Command-Line">Command Line</li>
            {/* <!-- <li className="portColl" id="moment">Moment.js</li> --> */}
            <li className="portColl" id="firebase">Firebase</li>
            {/* <!-- <li className="portColl" id="passport">Passport</li> --> */}
            <li className="portColl" id="MySQL">MySQL/Sequelize</li>
            <li className="portColl" id="Sequelize">MongoDB/Mongoose</li>
            <li className="portColl" id="Heroku">Heroku</li>
            <li className="portColl" id="Full Stack">Full Stack</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="center">

      {/* <!--btn-group - show on md screens--> */}
      <div className="btn-group" role="group" aria-label="App technologies">
      {/* <!-- <div className="port-grid"> --> */}
          <button className="btn" id="all">Show all</button>  
          {/* <!-- <button className="btn portButtons" id="javaScript">JavaScript</button> --> */}
          <button className="btn portButtons" id="jQuery"><img className="myIcons" alt="jquery icon" src={require("../../assets/images/jqueryIcon.png")}></img> jQuery</button>
          <button className="btn portButtons" id="Node.js"><img className="myIcons2" alt="node icon" src={require("../../assets/images/nodeIcon.png")}/></button>
          {/* <!-- <button className="btn portButtons" id="Express">Express</button> --> */}
          <button className="btn portButtons" id="bootstrap"><img className="myIcons2" alt="bootstrap icon" src={require("../../assets/images/bootstrapIcon2.png")}/></button>
          <button className="btn portButtons" id="handlebars"><img className="myIcons4" alt="handlebars icon" src={require("../../assets/images/hbsIcon2.png")}/>
              </button>
          <button className="btn portButtons" id="react"><img className="myIcons2" alt="react icon" src={require("../../assets/images/reactIcon2.png")}/>
          </button>
          <button className="btn portButtons" id="Command-Line">>_Command Line</button>
          {/* <!-- <button className="btn portButtons" id="moment">Moment.js</button> --> */}
          <button className="btn portButtons" id="firebase"><img className="myIcons4" alt="firebase icon" src={require("../../assets/images/firebaseIcon.png")}/></button>
          {/* <!-- <button className="btn portButtons" id="passport">Passport</button> --> */}
          <button className="btn portButtons" id="MySQL"><img className="myIcons3" alt="mysql icon" src={require("../../assets/images/mysqlIcon.png")}/></button>
          <button className="btn portButtons" id="Mongo"><img className="myIcons3" alt="mongo d b icon" src={require("../../assets/images/mongoIcon.png")}/></button>
          <button className="btn portButtons" id="Heroku"><img className="myIcons4" alt="heroku icon" src={require("../../assets/images/herokuIcon.png")}/></button>
          <button className="btn portButtons" id="Full Stack"><img className="myIcons4" alt="full stack icon" src={require("../../assets/images/fullStackIcon.png")}/>Full Stack</button>
      {/* <!-- </div> --> */}
      </div>

  </div>
  </div>
);

export default PortfolioHeader;