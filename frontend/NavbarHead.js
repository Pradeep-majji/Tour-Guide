import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarHead = () => {
  return (
  <Navbar bg="info" expand="lg">
      <Navbar.Brand href="/">Tourist Guide</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/AboutPage">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/user">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHead;
