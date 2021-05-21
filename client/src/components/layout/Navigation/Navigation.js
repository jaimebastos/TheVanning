import React from "react";
import { Navbar, Nav, NavDropdown, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navigation.css";
import Home from "./Home.png";
import Mecanic from "./Mecanic.png";
import Van from "./Van.png";
import User from "./User.png";
import Quote from "./Quote.png";
import AuthService from "../../../service/auth.service";

const Navigation = ({ loggedUser, storeUser }) => {
  const logout = () => {
    const authService = new AuthService()
    authService
      .logout()
      .then(() => {
        storeUser(undefined)
      })
      .catch(err => console.log(err))
  }

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
          <Nav.Link as={Link} to="/quote" className="nav-link navWeb">
            Camperizar
          </Nav.Link>
          <NavDropdown title={!loggedUser ? "Usuario" : loggedUser.username} id="basic-nav-dropdown" className="nav-link navWebDropDown">
            {
              !loggedUser ?
                <>
                  <NavDropdown.Item as={Link} to="/auth/signup">
                    Registro
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/auth/login">
                    Inicio Sesión
                  </NavDropdown.Item>
                </>
                :
                <>
                  <NavDropdown.Item as={Link} to={`/my-profile/${loggedUser._id}`}>
                    Mis facturas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={ButtonGroup} onClick={() => logout()}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                </>
            }
          </NavDropdown>
        </Nav>
        <Nav className="mr-auto nav-mobile ">
          <Nav.Link as={Link} to="/" className="navMob1">
            <img src={Home} alt="home"></img>
          </Nav.Link>
          <Nav.Link as={Link} to="/vans" className="navMob1">
            <img src={Van} alt="van"></img>
          </Nav.Link>
          <Nav.Link as={Link} to="/quote" className="navMob">
            <img src={Quote}></img>
          </Nav.Link>
          <Nav.Link as={Link} to="/extras" className="navMob">
            <img src={Mecanic} alt="mecanic"></img>
          </Nav.Link>
          <Nav.Link as={Link} to="/auth/signup" className="navMob">
            <img src={User} alt="user"></img>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
