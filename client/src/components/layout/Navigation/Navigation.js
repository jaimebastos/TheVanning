import React from "react";
import { Navbar, Nav, NavDropdown, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import FilteredExtras from "../../pages/ExtrasFilter/ExtrasFilter";
import logo from "./logo.jpeg";
import "./Navigation.css";
import Home from "./Home.png";
import Mecanic from "./Mecanic.png";
import Van from "./Van.png";
import User from "./User.png";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-around nav">
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/" className="nav-link brand ">
            <img alt="" src={logo} className="d-inline-block align-top logo" />{" "}
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto navWebFather ">
          <Nav.Link as={Link} to="/vans" className="nav-link navWeb">
            Furgonetas
          </Nav.Link>
          <Nav.Link as={Link} to="/extras" className="nav-link navWeb">
            Instalaciones
          </Nav.Link>
          <Nav.Link as={Link} to="/quote/list-vans" className="nav-link navWeb">
            Camperizar
          </Nav.Link>
          <NavDropdown title="Usuario" id="basic-nav-dropdown" className="nav-link navWebDropDown">
            <NavDropdown.Item as={Link} to="/auth/signup">
              Registro
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/auth/login">
              Inicio Sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="mr-auto nav-mobile ">
          <Nav.Link as={Link} to="/" className="navMob1">
            <img src={Home}></img>
          </Nav.Link>
          <Nav.Link as={Link} to="/vans" className="navMob1">
            <img src={Van}></img>
          </Nav.Link>
          <Nav.Link as={Link} to="/extras" className="navMob">
            <img src={Mecanic}></img>
          </Nav.Link>
          <Nav.Link as={Link} to="/auth/signup" className="navMob">
            <img src={User}></img>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
