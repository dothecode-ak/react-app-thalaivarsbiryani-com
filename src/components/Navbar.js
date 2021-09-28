import React from 'react';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand> <LinkContainer to="/">
                <NavLink>
                  Thalaivars
                </NavLink>
              </LinkContainer></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <LinkContainer to="/menu">
                <NavLink>
                  Menu
                </NavLink>
              </LinkContainer>
              <Nav.Link href="#order-now">Order Now</Nav.Link>
              <Nav.Link href="#bulk-orders">Bulk Orders</Nav.Link>
              <LinkContainer to="/contact">
                <NavLink>
                  Contact
                </NavLink>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavLink>
                  About
                </NavLink>
              </LinkContainer>
              <Nav.Link href="#feedback">Feedback</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

}
export default NavbarComponent;


