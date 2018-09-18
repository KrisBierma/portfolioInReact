import React, { Component } from "react";
import {Container, Row, ButtonGroup} from "reactstrap";
import PortApp from "./components/portApps";
import NavbarComponent from "./components/navBar";
import Intro from "./components/intro";
import Separator from "./components/separator";
import projects from "./projects.json";
import "./App.css";
import PortfolioHeader from "./components/portfolioHeader";
import ProjectModal from "./components/projectModal";
import {ListItem} from "./components/List";
import {Button} from "./components/Button";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        projects,
        show:false,
        currentBtn:"",
        techs:[],
        listItems:[],
        btnClassname:"btn",
        menu:[
          {
            id:"Node.js",
            imgClass:"myIcons2",
            place:"/nodeIcon.png",
            name:""
          },
          {
            id:"jQuery",
            imgClass:"myIcons",
            place:"/jqueryIcon.png",
            name:" jQuery"
          },
          {
            id:"Bootstrap",
            imgClass:"myIcons2",
            place:"/bootstrapIcon2.png",
            name:""
          }
        ],
        list:["jQuery", "Bootstrap", "Handlebars", "React", "Command-Line", "Firebase", "MySQL", "Sequelize", "Heroku", "Full Stack"]
      };
      this.showModal = this.showModal.bind(this);
      this.showBtn = this.showBtn.bind(this);
      this.hideBtn = this.hideBtn.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
      this.toTop = this.toTop.bind(this);
  };

  componentDidMount() {
    this.setState({projects:projects});
    console.log(projects);
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  };


  // TODO:
  // fix spacing in bio
  // make sure dividers show up

  // when user starts scrolling, 'go to top' btn appears
  handleScroll(event) {
    if (document.documentElement.scrollTop > 500){
      this.setState({btnClassname:"btn topBtnShow"});
    }
    else {
      this.setState({btnClassname:"btn hide"});
    }
  };

  showModal = (title, body, github, site, image, id, alt) => {
    this.setState({
      show:true,
      id:id,
      title:title,
      body:body,
      github:github,
      site:site,
      image:image,
      techs:projects[id].techs,
      alt:alt
    }, function() {
      console.log(this.state.id);
      console.log(this.state.title);
      console.log(projects);
      console.log(this.state.site)
      console.log(this.state.techs)
      this.writeTechs();      
    });


  };

  hideModal = () => {
    this.setState({show:false});
  };

  toggle = () => {
    this.setState({show: !this.state.show});
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
    console.log(this.state.projects)
  };

  // clicking "go to the top" button takes user to top of screen
  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  };

  // convert techs from array to grammatically correct sentence to display
  writeTechs = () => {
    const thisId = this.state.id;
    console.log(thisId)
    console.log(projects)
    console.log(projects[thisId]);
    console.log(projects[thisId].techs)
    this.setState({techs: projects[thisId].techs.join(", ")});
  };

  render() {
    return (
      <Container className="container-fluid" id="home">
        <NavbarComponent></NavbarComponent>
       
        <button id="topBtn" className={this.state.btnClassname} onClick={this.toTop}title="Go to the top"><i className="far fa fa-angle-double-up" aria-hidden="true"> </i> To the top</button>

        <Row className="grey-box nomar justify-content-center">
          <div className="col-lg-9 col-md-11 col-sm-12 article">

            <Intro />
            <Separator id = "portfolio" />
            <PortfolioHeader>
              <div>
                <ListItem id={"allHamburger"} showBtn={this.showBtn}>Show All</ListItem>
                <li id="allHamburger" className="btn" onClick={this.showBtn}>Show all</li>
                
                {this.state.list.map(name => { return(
                  <ListItem id={name} className="portColl" hideBtn={this.hideBtn}>{name}</ListItem>
                )
                })}
              </div>

            {/* go through menu of technologies and create buttons */}
            <ButtonGroup>
              <button className="btn" id="all" onClick={this.showBtn}>Show all</button>  
              {this.state.menu.map(butt => { return(
                <Button id={butt.id} hideBtn={this.hideBtn}>
                  <img className={butt.imgClass} 
                  alt={butt.id}
                  src=
                  {require(`./assets/images${butt.place}`)}
                  />
                  {butt.name}
                </Button>
              )})}
            </ButtonGroup>

            </PortfolioHeader>

            <Row>
              <div className="port-grid">
                {projects.map((project, index) => {return(
                  <PortApp 
                    key={project.title}
                    id={index}
                    image={require(`${project.image}`)}
                    alt={project.alt}
                    title={project.title}
                    body={project.body}
                    github={project.github}
                    site={project.site}
                    newClass={project.newClass}
                    showModal={this.showModal}
                   > 
                  {project.techs.map((tech, index) => (
                    <ListItem key={tech} id={index+1}>{tech}</ListItem>
                  ))}
                  </PortApp>
                )})}          
              </div>

              <ProjectModal
                modal={this.state.show}
                toggle={this.toggle}
                id={this.state.id}
                title={this.state.title}
                body={this.state.body}
                techs={this.state.techs}
                github={this.state.github}
                site={this.state.site}
                image={this.state.image}
                alt={this.state.alt}
              ></ProjectModal> 

            </Row>
            <Separator id = "bio" />
            <Bio></Bio>
            <Separator id="contact"></Separator>
            <Contact></Contact>
          </div>
        </Row>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App;
