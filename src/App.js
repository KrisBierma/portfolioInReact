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
import {ListItem, ListTech} from "./components/List";
import {Button} from "./components/Button";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import PsalmsLanding from './pages/PsalmsLanding';
import Portfolio from './pages/Portfolio';
import IndividualPsalm from './pages/IndividualPsalm';
import PsalmsComparison from "./pages/PsalmsComparison";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/psalms' component={PsalmsLanding} />
        <Route exact path='/psalmsCompare' component={PsalmsComparison} />
        <Route exact path='/psalm/:psalmId' component={IndividualPsalm} /> 
      </div>
      </Router>      
    )
  }
}

export default App;
