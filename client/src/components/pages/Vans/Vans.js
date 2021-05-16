import React from 'react'
import { Container } from 'react-bootstrap'

import VansList from './Vans-list'
import './Vans.css'

const Vans = () => {

    return (

        <Container className="vans-page">

            <h1 className="van-list-title"> Listado de furgonetas </h1>

            <hr />

            <VansList />

        </Container>

    )
}

export default Vans