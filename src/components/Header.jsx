import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { navItems } from "../data";
export const Header = () => {
  return (
    <Navbar expand="md" className="bg-body-secondary shadow p-90">
      <Container className="container-fluid ">
        <Navbar.Brand href="#home">My Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="me-auto">
            {navItems.map((navList) => {
              return (
                <Nav.Link href="#" key={navList.name}>
                  {navList.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
