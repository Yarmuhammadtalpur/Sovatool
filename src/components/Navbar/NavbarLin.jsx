import React from "react";
import NavStyle from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavbarLin() {
  return (
    <>
      <Navbar className={NavStyle.navbarinks}>
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link className={NavStyle.navLink} href="#home">
              Shop All Products
            </Nav.Link>
            <Nav.Link className={NavStyle.navLink} href="#features">
              Shop by Brand
            </Nav.Link>
            <Nav.Link className={NavStyle.navLink} href="#pricing">
              Download Centre
            </Nav.Link>
            <Nav.Link className={NavStyle.navLink} href="#pricing">
              Contact Us
            </Nav.Link>
            <Nav.Link className={NavStyle.navLink} href="#pricing">
              About Us
            </Nav.Link>
            <Nav.Link className={NavStyle.navLink} href="#pricing">
              Careers
            </Nav.Link>
            <Nav.Link className={NavStyle.navLink} href="#pricing">
              Support
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className={NavStyle.navLink}>Quick Order</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLin;
