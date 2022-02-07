import React from 'react';
import Auth from '../../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import {
  Navbar,
  Nav
} from 'react-bootstrap';

import './index.css';

function NavStrap(props) {

  if(Auth.loggedIn()){
    return (
      <Navbar sticky="top" bg="dark" variant='dark' expand="lg">
        <Navbar.Brand as={Link} to="/">{'onlineCafé ☕'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }else {
    return (
      <Navbar sticky="top" bg="dark" variant='dark' expand="lg">
        <Navbar.Brand as={Link} to="/">{'onlineCafé ☕'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  
}

export default NavStrap;