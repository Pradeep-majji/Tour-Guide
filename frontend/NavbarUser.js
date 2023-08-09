import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavbarUser = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Navbar.Brand href="/user/UserHome">User Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/user/UserHome">Dashboard</Nav.Link>
          <Nav.Link href="/TravelUserForm">Search Guide</Nav.Link>
          <Nav.Link href="/History">History</Nav.Link>
          <Nav.Link href="/BookGuide">Book</Nav.Link>
          <Nav.Link href="/">logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarUser