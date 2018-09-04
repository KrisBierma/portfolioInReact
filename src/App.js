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

  state = {
    projects,
    show:false,
    what:"danger"
  };

  showModal = () => {
    this.setState({show:true});
  };

  hideModal = () => {
    this.setState({show:false});
  };

  toggle = () => {
    this.setState({show: !this.state.show});
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
                {projects.map(project => (
                  <PortApp 
                    key={project.name}
                    id={project.id}
                    image={require(`${project.image}`)}
                    alt={project.alt}
                    title={project.title}
                    showModal={this.showModal}
                  />
                ))}          
              </div>
              <ProjectModal
                // buttonLabel={}
                modal={this.state.show}
                toggle={this.toggle}
                className={this.state.what}
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