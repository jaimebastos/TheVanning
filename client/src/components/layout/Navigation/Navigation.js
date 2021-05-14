import React from "react";
import { Navbar, Nav, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FilteredExtras from "../../pages/ExtrasFilter/ExtrasFilter";
import logo from "./logo.jpeg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand>
        <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> Vans_app!
      </Navbar.Brand>

      <Nav className="mr-auto">
        <Link to="/vans" className="nav-link">
          Furgonetas
        </Link>

        <DropdownButton className="extras-dropdown" variant="outline-secondary" id="dropdown-item-button" title="Equipamientos">
          <Dropdown.ItemText></Dropdown.ItemText>
          <Row>
            <Col md={6}>
              <Dropdown.Item as={Link} to={`/extras/Gas`}>
                Gas
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/extras/Entretenimiento`}>
                Entretenimiento
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/extras/Revestimiento`}>
                Revestimiento
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/extras/Electrodomesticos`}>
                Electrodomesticos
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/extras/Electrónica`}>
                Electrónica
              </Dropdown.Item>
            </Col>

            <Col md={6}>
              <Dropdown.Item as={Link} to={`/extras/Electricidad`}>
                Electricidad
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/extras/Agua`}>
                Agua
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/extras/Almacenamiento`}>
                Almacenamiento
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/extras/Confort`}>
                Confort
              </Dropdown.Item>
            </Col>
          </Row>
        </DropdownButton>

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
