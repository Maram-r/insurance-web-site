import React from 'react';
import  "./Navbar.css" ;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom";
function CustomNavbar() {
 return(
   

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='slogan'>InsureFlow</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '1000px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" classname='action'><p>Home</p></Nav.Link>
            <Nav.Link href='#ggg' classname='action'><p>Store</p></Nav.Link>
            <Nav.Link href='#act' classname='action'><p>Policy</p></Nav.Link>
            <Nav.Link href="#action2" classname='action'><p>Repair Shop</p></Nav.Link>
            <NavDropdown title="Insurance"  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><p>Self Claim</p></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
              <p>Claims Managment</p>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              <p>Contracts Managment</p>
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
 
    );
  
}

export default CustomNavbar;
  




