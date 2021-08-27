import React, { useState,useEffect } from "react";
import { Navbar,Container,NavDropdown,Nav  } from "react-bootstrap";
import { render } from "react-dom";
import { axiosClient } from "./clients";
export default class App extends React.Component {

  #userName = "";
  constructor(props){
   super(props);
  }

  async componentDidMount(){
    var userName = (await axiosClient.get("/user/username")).data
    this.#userName = userName;
    this.forceUpdate();
    console.log(user,"calllllllled")
  }

  render(){
    return(
      <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              {
                this.#userName
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
  }
}
