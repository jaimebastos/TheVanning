import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const VanCard = ({ name, caption, image, price, _id }) => {

    return (
        <Col md={4}>
            <Card className="van-card" >
                
                <Card.Img variant="top" src={image[0]} />
                
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{caption}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Link to={`/vans/details/${_id}`} className="btn btn-dark" >Detalles</Link>
                    <Link to={`/vans/edit/${_id}`} className="btn btn-dark"> Editar Van</Link>
                </Card.Body>

                
            </Card>
        </Col>
    )
}

export default VanCard