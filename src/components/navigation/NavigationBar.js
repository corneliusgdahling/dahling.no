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
              <NavItem className="navItem" eventKey={1}><FontAwesome name="code" /> <h8 className="navText">Code</h8></NavItem>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavItem className="navItem" eventKey={2}><FontAwesome name="github" /> <h8 className="navText">Projects</h8></NavItem>
            </LinkContainer>
            <LinkContainer to="/cv">
              <NavItem className="navItem" eventKey={3}><FontAwesome name="file-pdf-o" /> <h8 className="navText">CV</h8></NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
