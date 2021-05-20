import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import VansList from './Vans-list'
import './Vans.css'


const Vans = ({ loggedUser }) => {
    return (

        <Container className="vans-page">

            <h1 className="van-list-title"> Listado de furgonetas </h1>
            <hr />
            {
                loggedUser && loggedUser.role === "ADMIN"
                    ?
                    <Link to="/vans/create" className="btn btn-outline-dark boton-crear-extra">Crear furgoneta</Link>
                    :
                    <></>}
            <VansList loggedUser={loggedUser} />

        </Container>

    )
}

export default Vans