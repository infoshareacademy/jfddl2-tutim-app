import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap'
import {   Link } from 'react-router-dom'
import {
  LinkContainer
} from 'react-router-bootstrap'

import FacebookProvider , { Share }from "react-facebook";
import logo from './favicon.png'
import styles from './MainMenu.css'

import {connect} from 'react-redux'

import {signOut} from '../../state/auth'


const MainMenu = (props) => (
    <Navbar
        style={{
            marginLefteft: 30,
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

      <LinkContainer to="/planerTable">
        <NavItem>Twój Planer</NavItem>
      </LinkContainer>

      <LinkContainer to="/addMeal">
        <NavItem>Dodaj przepis</NavItem>
      </LinkContainer>



        <LinkContainer to="/userProfile">
        <NavItem>Twoje konto</NavItem>
      </LinkContainer>

          <LinkContainer to="/v2">
              <NavItem>wersja 2.0</NavItem>
          </LinkContainer>

              <NavItem><FacebookProvider appId="1">
                  <Share href="http://www.facebook.com">
                      <button type="button">
                          Udostępnij
                      </button>
                  </Share>
              </FacebookProvider></NavItem>


          <NavItem onClick={props.signOut}>Wyloguj</NavItem>



    </Nav>
  </Navbar>



)

export default connect(
  null,
  (dispatch)=>({
    signOut: () => dispatch(signOut())
  })
)(MainMenu)