import React, {Component} from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DrownToggle, DrAzopdownMenu, DropdownItem } from "reactstrap";
import "./navBar.css";

  class NavbarComponent extends Component {
    
    constructor(props) {
      super(props);
      // this.toggleNavbar = this.toggleNavbar.bind(this);
      this.toggle = this.toggle.bind(this);
      this.state = {
        // collapsed: true
        isOpen: false
      };
    }

    // functions here
    // toggleNavbar() {
    //   this.setState({
    //     collapsed: !this.state.collapsed
    //   });
    // };
    toggle() {
      this.setState ({
        isOpen: !this.state.isOpen
      });
    };

    render() {
      return (
        // <Navbar collapseOnSelect>
        <div>
        <Navbar color="faded" light expand="md" fixed={`top`}>
            <NavbarBrand>
              <h1>Kris Acker Bierma</h1>
            </NavbarBrand>

            {/* <NavbarToggler className="mr-2" onClick={this.toggleNavbar} /> */}
            <NavbarToggler onClick={this.toggle}/>

            {/* <Collapse isOpen={!this.state.collapsed} navbar> */}
            <Collapse isOpen={this.state.isOpen} navbar>
            <div right>
              <Nav classname="mr-auto" navbar>
                <NavItem>
                  <NavLink href="#portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#bio">Bio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
              </Nav>
              </div>
            </Collapse>
        </Navbar>  
        </div>     
      )
    }

  };

  export default NavbarComponent;
