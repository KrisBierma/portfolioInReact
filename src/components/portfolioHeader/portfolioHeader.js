import React, {Component} from "react";
import "./portfolioHeader.css";
import {Button} from "../Button";
import {ListItem} from "../List";
import projects from "../../projects.json";

class PortfolioHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: null,
      menu:[
        {
          id:"Node.js",
          imgClass:"myIcons2",
          place:"nodeIcon.png",
        },
        {
          id:"jQuery",
          imgClass:"myIcons",
          place:"jqueryIcon.png",
        }
      ],
      list:["jQuery", "Bootstrap", "Handlebars", "React", "Command-Line", "Firebase", "MySQL", "Sequelize", "Heroku", "Full Stack"],
      projects
    };
    this.showBtn = this.showBtn.bind(this);
    this.hideBtn = this.hideBtn.bind(this);
  }

  componentDidMount() {
    this.setState({
      projects: projects
    });
    console.log(projects);    
  };

  // clicking this shows all the projects
  showBtn() {
    console.log(this.state.projects)
    for (let i=0; i<this.state.projects.length; i++) {
      // create a var for state
      const location = this.state.projects;
      // make that var for each specific project's newClass = "show"; can't do these steps in setState; must be done outside of it
      location[i].newClass = "show";
      // dynamically add className of "show" to all projects
      this.setState({
        location  
      });
    }
    console.log(projects);
  };

  myCallback = (dataFromChild) => {
    this.setState({listDataFromChild: dataFromChild});
  }
  
  // clicking any btn except showAll hides the projects without that technology
  hideBtn(id) {
    // make sure all projects are present and accounted for first
    this.showBtn();
    console.log(id)
    // loop through projects and set all included to false
    for (let i=0; i<this.state.projects.length; i++){
      const included = this.state.projects;
      included[i].inc = false;

      // loop through the techs of each project; if the project has a tech that matches the button clicked, set its included to true
      for (let j=0; j<included[i].techs.length; j++){
        if (included[i].techs[j] === id) {
          included[i].inc = true;
        }
        console.log("here")
      }

      // if the current project is not included, add class "hide"
      if (included[i].inc !== true) {
        const location = this.state.projects;
        location[i].newClass = "hide";
        this.setState({
          location  
        });
        console.log("here")
      }

    }
    console.log(this.state.projects);
    this.myCallback();
    // myCallback = (dataFromChild) => {
    //   this.setState({listDataFromChild: dataFromChild});
    // }
    // this.props.callbackFromParent(listInfo);
  };

  // TO-Do:
// make button icon images show up

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
                {/* <ListItem id={"allHamburger"} showBtn={this.showBtn}>Show All</ListItem> */}
                <li id="allHamburger" className="btn" onClick={this.showBtn}>Show all</li>
                
                {this.state.list.map(name => { return(
                  <ListItem id={name} className="portColl" hideBtn={this.hideBtn}>{name}</ListItem>
                )
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="center">
          <div className="btn-group" role="group" aria-label="App technologies">
            <button className="btn" id="all" onClick={this.showBtn}>Show all</button>  

            {this.state.menu.map(butt => { return(
              <Button id={butt.id} hideBtn={this.hideBtn}>
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