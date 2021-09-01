import React, { useState,useEffect } from "react";
import { Navbar,Container,NavDropdown,Nav  } from "react-bootstrap";
import { render } from "react-dom";
import { axiosClient } from "./clients";
import AddItem from "./Components/AddItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends React.Component {
  #userName = "";
  constructor(props){
   super(props);
  }

  async componentDidMount(){
    var userName = (await axiosClient.get("/user/username")).data
    this.#userName = userName;
    this.forceUpdate();
  }

  render(){
    return(
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Dursikchya Project</Navbar.Brand>
              <Nav className="me-auto">
                <p className="my-auto">
                  {
                    this.#userName
                  }
                </p>
                <Link to="/addItem">
                  <button className="btn btn-primary">Add Item</button>
                </Link>
                <Link to="/items">
                  <button className="btn btn-primary">Items</button>
                </Link>
                <a href="/account/logout">
                  <button className="btn btn-primary">Logout</button>
                </a>
                
              </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/addItem">
            <AddItem/>
          </Route>
        </Switch>
      </Router>
      
    </>
    )
  }
}



