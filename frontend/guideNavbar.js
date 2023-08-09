import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const guideNavbar = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Navbar.Brand href="/guide/guideHome">guide</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/guide/guideHome">Dashboard</Nav.Link>
          <Nav.Link href="/guide/guideHistory">History</Nav.Link>
          <Nav.Link href="/">logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default guideNavbar;