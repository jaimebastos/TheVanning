import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Navigation.css'


const Navigation = () => {


    return (

        <Navbar bg="dark" variant="dark" className="justify-content-between">

            <Navbar.Brand>
                <img alt="" src={logo} width="150" height="30"  className="d-inline-block align-top logo" />{' '} 
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Link to="/vans" className="nav-link">Furgonetas</Link>
                {
                        <>
                            <Link to="/vans/create" className="nav-link" > Crear Van</Link>
                            <Link to="/auth/signup" className="nav-link">Registro</Link>
                            <Link to="/auth/login" className="nav-link">Iniciar sesión</Link>
                        </>   
                }
            </Nav>
        </Navbar>
    )
    }

export default Navigation