import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.jpeg'
import './Navigation.css'


const Navigation = () => {


    return (

        <Navbar bg="dark" variant="dark" className="justify-content-between">

            <Navbar.Brand>
                <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}Vans_app!
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Link to="/vans" className="nav-link">Furgonetas</Link>
                {
                        <>
                            <Link to="/signup" className="nav-link">Registro</Link>
                            <Link to="/login" className="nav-link">Iniciar sesión</Link>
                        </>   
                }
            </Nav>
        </Navbar>
    )
    }

export default Navigation