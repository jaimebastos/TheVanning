import React from 'react'
import { Component } from 'react'
import VansService from './../../../service/vans.service'
import VanCard from './Van-card'

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
                console.log('Estamos aquiiiiii', response)
                this.setState({ vans: response.data })  
            })
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }

    render() {
        const { vans } = this.state
        
        return(
            
            !vans
                ?
                <h1>CARGANDO</h1>
                :
                <>   
                    <Row>
                        {vans.map(elm => <VanCard key={elm._id} {...elm} />)}
                    </Row>
                </>         
        )
    }

}


export default VansList