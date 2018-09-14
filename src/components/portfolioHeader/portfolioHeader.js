import React, {Component} from "react";
// import "./portfolioHeader.css";
import {Button} from "../Button";
import {ListItem} from "../List";

class PortfolioHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // naught: ["1", "2", "3"],
    menu:[
      {
        id:"Node.js",
        imgClass:"myIcons2",
        place:"nodeIcon.png"
      },
      {
        id:"jQuery",
        imgClass:"myIcons",
        place:"jqueryIcon.png"
      }
    ],
    list:["jQuery", "Bootstrap", "Handlebars", "React", "Command-Line", "Firebase", "MySQL", "Sequelize", "Heroku", "Full Stack"]
    };
  }
  render() {
    return (
      <div>
        <div className="row sectionPort">
          <h3>Portfolio</h3>
          <div className="btn-collapse">
            <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse" data-target=".portfolio-collapse" aria-controls="portCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span><i className="fal fal-port fa-bars fa"></i></span>
            </button>
            <div className="collapse portfolio-collapse justify-content-end" id="portCollapse">
              <ul className="text-right float-right pr-3">
                <ListItem 
                  id={"allHamburger"}
                  // className={}
                >Show All</ListItem>         
                <li id="allHamburger">Show all</li>
                
                {this.state.list.map(name => { return(
                  <ListItem id={name} className="portColl">{name}</ListItem>
                )
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="center">
          <div className="btn-group" role="group" aria-label="App technologies">
            <button className="btn" id="all">Show all</button>  

            {this.state.menu.map(butt => { return(
              <Button id={butt.id}>
                {butt.id}
              </Button>
            )

            })}
          </div>
        </div>
      </div>

    )
  }
};

export default PortfolioHeader;