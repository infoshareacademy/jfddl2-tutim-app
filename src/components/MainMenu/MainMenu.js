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

import logo from './favicon.png'
import styles from './MainMenu.css'




const MainMenu = () => (
    <Navbar
        style={{
            background:'black',
            color: '#FFFFFF'

        }}
    >
    <Navbar.Header    >
      <Navbar.Brand>
        <Link to="/"><img src={logo} style={{ height: 40, paddingBottom: 15 }} alt="sth"/></Link>
      </Navbar.Brand>
    </Navbar.Header
    >

      <Nav>

        <LinkContainer  to="/search">
        <NavItem>Wyszukaj</NavItem>
      </LinkContainer>

      <LinkContainer to="favourite">
        <NavItem>Ulubione</NavItem>
      </LinkContainer>

      <LinkContainer to="/addMeal">
        <NavItem>Dodaj przepis</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default MainMenu