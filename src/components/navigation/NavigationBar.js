import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

export default class NavigationBar extends Component{

  render (){
    return (
      <Navbar>
        <Navbar.header>
          <Navbar.brand>
            <Link to="/">
              <a className="nav-logo">Dahling.no</a>
            </Link>
          </Navbar.brand>
        </Navbar.header>
        <Navbar.collapse>
          <Nav pullRight>
                <Link to="/home">
                  <NavItem eventKey={1}><FontAwesome name="home" /> Home</NavItem>
                </Link>
                <Link to="/projects">
                  <NavItem eventKey={2}><FontAwesome name="projects" /> Projects</NavItem>
                </Link>
                <Link to="/cv">
                  <NavItem eventKey={3}><FontAwesome name="cv" /> CV</NavItem>
                </Link>
              </Nav>
        </Navbar.collapse>
      </Navbar>
    );
  }
}
