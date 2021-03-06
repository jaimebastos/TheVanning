import React from 'react'
import { Component } from 'react'
import VansService from './../../../service/vans.service'
import VanCard from './Van-card'

import { Link } from 'react-router-dom'

import { Row } from 'react-bootstrap'


class VansList extends Component {

    constructor() {
        super()
        this.state = {
            vans: undefined,
            // showModal: false
        }
        this.VansService = new VansService()
    }

    componentDidMount() {
        this.loadVans()
    }

    loadVans() {
        this.VansService
            .getAllVans()
            .then(response => {
                this.setState({ vans: response.data })
            })
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }

    render() {
        const { vans } = this.state

        return (

            !vans
                ?
                <h1>CARGANDO</h1>
                :
                <>
                    <Link to="/vans/create" className="btn btn-dark"> Crear Van</Link>

                    <Row>
                        {vans.map(elm => <VanCard key={elm._id} {...elm} />)}
                    </Row>

                </>
        )
    }

}


export default VansList