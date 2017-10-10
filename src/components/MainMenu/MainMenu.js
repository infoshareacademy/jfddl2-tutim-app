import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'
import {
  LinkContainer
} from 'react-router-bootstrap'

import logo from './logo.svg'

const MainMenu = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src={logo} style={{ height: 20 }} alt="sth"/></Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/counter">
        <NavItem>
          Counter
        </NavItem>
      </LinkContainer>

      <LinkContainer to="/tasker">
        <NavItem>Tasker</NavItem>
      </LinkContainer>

      <LinkContainer to="/meals">
        <NavItem>Jedzenie</NavItem>
      </LinkContainer>

      <LinkContainer to="/search">
        <NavItem>Wyszukaj</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default MainMenu