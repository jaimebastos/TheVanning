import React from "react";
import { Navbar, Nav, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FilteredExtras from "../../pages/ExtrasFilter/ExtrasFilter";
import logo from "./logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-around nav">
      <Navbar.Brand>
        <Link to="/" className="nav-link">
          <img alt="" src={logo} className="d-inline-block align-top logo" />{" "}
        </Link>
      </Navbar.Brand>

      <Nav className="mr-auto">
        <Link to="/vans" className="nav-link">
          Furgonetas
        </Link>

        <Link to="/extras" className="nav-link">
          Extras
        </Link>

        <Link to="/auth/signup" className="nav-link">
          Registro
        </Link>
        <Link to="/auth/login" className="nav-link">
          Iniciar sesión
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
