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

class App extends Component {

  // constructor(props) {
    // super(props);
      state = {
        projects,
        show:false,
        what:"danger",
        // title,
        // body
        // techs:[]
        id:4
      };
      // this.showModal = this.showModal.bind(this);
  // }


  componentDidMount() {
    this.setState({projects:projects})
    console.log(projects);
    // this.showModal(this.state.title);
    // console.log(this.state.index)
  }

  showModal = (title, body, github, site, image, id) => {
    this.setState({
      show:true,
      id:id,
      title:title,
      body:body,
      github:github,
      site:site,
      image:image,
      techs:projects[id].techs
    });
    console.log(this.state.id);
    console.log(this.state.title);
    console.log(projects);
    console.log(this.state.site)
    console.log(this.state.techs)
  };

  hideModal = () => {
    this.setState({show:false});
  };

  toggle = () => {
    this.setState({show: !this.state.show});
  };

  writeTechs = (this.state.techs) => {
    
  };

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
                    // key={index}
                    // index={index}
                    // id={project[index]}
                    id={index}
                    image={require(`${project.image}`)}
                    alt={project.alt}
                    title={project.title}
                    body={project.body}
                    github={project.github}
                    site={project.site}
                    showModal={this.showModal}
                    // techs={project.techs.map(tech => (console.log(tech)))}
                    // techs={project.techs}
                  />
                )}
                // project.techs.map(tech => {console.log()})

                )}          
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