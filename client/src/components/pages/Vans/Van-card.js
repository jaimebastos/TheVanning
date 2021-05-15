import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Vans.css'

import { Glide } from 'react-glide'

const VanCard = ({ name, caption, image, price, _id }) => {

    return (
        <Col md={4}>
            <Card className="van-card">
                <Glide height={'100%'} width={'100%'}>
                    <Card.Img variant="top" src={image} />
                </Glide>
                <Card.Body>
                    <Card.Title className="card-name">{name}</Card.Title>
                    <Card.Title className="card-info">{caption}</Card.Title>
                    <Card.Title className="card-info">{price} $</Card.Title>
                    <Link to={`/vans/details/${_id}`} className="btn btn-dark boton" >Detalles</Link>
                    <Link to={`/vans/edit/${_id}`} className="btn btn-dark boton"> Editar Van</Link>
                </Card.Body>

                
            </Card>
        </Col>
    )
}

export default VanCard