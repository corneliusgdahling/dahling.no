import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import './NavigationBar.css';

export default class NavigationBar extends Component{

  render (){
    return (
      <Navbar className="NavigationBar" collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
            <a href="/" className="nav-logo"><FontAwesome className="FontAwesome-home" name="home" /></a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/code">
              <NavItem className="code" eventKey={1}><FontAwesome name="code" /> Code</NavItem>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavItem eventKey={2}><FontAwesome name="github" /> Projects</NavItem>
            </LinkContainer>
            <LinkContainer to="/cv">
              <NavItem eventKey={3}><FontAwesome name="file-pdf-o" /> CV</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
