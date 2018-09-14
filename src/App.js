import React, { Component } from "react";
import {Container, Row, Col} from "reactstrap";
import PortApp from "./components/portApps";
import NavBar from "./components/navBar";
import Intro from "./components/intro";
import Separator from "./components/separator";
import projects from "./projects.json";
import "./App.css";
import PortfolioHeader from "./components/portfolioHeader";
import ProjectModal from "./components/projectModal";
import {ListItem} from "./components/List";

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        projects,
        show:false,
        what:"danger",
        // title,
        // body
        techs:[],
        listItems:[]
        // id:4
      };
      this.showModal = this.showModal.bind(this);
  }


  componentDidMount() {
    this.setState({projects:projects})
    console.log(projects);
  }

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

  

  // convert techs from array to grammatically correct sentence to display
  writeTechs = () => {
    const thisId = this.state.id;
    console.log(thisId)
    console.log(projects)
    console.log(projects[thisId]);
    console.log(projects[thisId].techs)
    this.setState({techs: projects[thisId].techs.join(", ")});

  };

  // to-do:
  // top button doesn't work
  // favicon

  render() {
    return (
      <Container className="container-fluid" id="home">
        <NavBar></NavBar>
       
        <button id="topBtn" className="btn" title="Go to the top"><i className="far fa fa-angle-double-up" aria-hidden="true"> </i> To the top</button>

        <Row className="grey-box nomar justify-content-center">
          <div className="col-lg-9 col-md-11 col-sm-12 article">

            <Intro />
            <Separator id = "portfolio" />
            <PortfolioHeader></PortfolioHeader>
            {/* <TopButton></TopButton> */}
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
                    showModal={this.showModal}
                   > 
                  {project.techs.map((tech, index) => (
                    <ListItem key={tech} id={index+1}>{tech}</ListItem>
                  ))}
                  </PortApp>
                )})}          
              </div>

              <ProjectModal
                // buttonLabel={}
                modal={this.state.show}
                toggle={this.toggle}
                id={this.state.id}
                className={this.state.what}
                title={this.state.title}
                body={this.state.body}
                techs={this.state.techs}
                github={this.state.github}
                site={this.state.site}
                image={this.state.image}
                alt={this.state.alt}
              ></ProjectModal> 

            </Row>
            <Separator id = "building_things" />
          </div>
        </Row>
      </Container>
    )
  }
}

export default App;