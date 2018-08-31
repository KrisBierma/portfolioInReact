import React, { Component } from "react";
import {Container, Row, Col} from "reactstrap";
import PortApp from "./components/portApps";
import NavBar from "./components/navBar";
import Intro from "./components/intro";
import projects from "./projects.json";
import "./App.css";

class App extends Component {

  state = {
    projects,
  };

  render() {
    return (
      <Container className="container-fluid" id="home">
        <NavBar></NavBar>
       
        <button id="topBtn" className="btn" title="Go to the top"><i className="far fa fa-angle-double-up" aria-hidden="true"> </i> To the top</button>

        <Row className="grey-box nomar justify-content-center">
          <div className="col-lg-9 col-md-11 col-sm-12 article">

        <Intro />

        {/* <BioBox></BioBox> */}
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
              />
            ))}          
          </div>
        </Row>
        </div>
{/* </div> */}
        </Row>
      </Container>
      // <
    )
  }
}

export default App;