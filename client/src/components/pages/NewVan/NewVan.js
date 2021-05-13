import { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import VansService from '../../../service/vans.service'
import './NewVan.css'

class NewVan extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            designer: {
                brand: '',
                model: ''
            },
            caption: '',
            description: '',
            dimension: {
                length: '',
                Weight: 0,
                height: '',
            },
            specifications: {
                fuelSpecifications: {
                    fuelType: '',
                    fuelConsume: 0,
                },
                cv: 0,
                kilometers: 0,
                year: 0,
            },
            image: '',
            price: 0,
        }
        this.VansService = new VansService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        const designerCopy = { ...this.state.designer }
        const dimensionCopy = { ...this.state.dimension }
        const specificationsCopy = { ...this.state.specifications }
        const specificationsFuelCopy = { ...this.state.specifications.fuelSpecifications }

        designerCopy[name] = value
        dimensionCopy[name] = value
        specificationsCopy[name] = value
        specificationsFuelCopy[name] = value

        this.setState({
            [name]: value,
            designer: designerCopy,
            dimension: dimensionCopy,
            specifications: {
                specificationsCopy,
                fuelSpecifications: specificationsFuelCopy,
            }
        })

    }

    handleSubmit(e) {

        e.preventDefault()

        this.VansService
            .createVan(this.state)
            .then(response => this.props.history.push('/vans'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <Form onSubmit={e => this.handleSubmit(e)}>

                    <Row className="justify-content">
                        <Col md={6}>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                            </Form.Group>

                            <Form.Group controlId="brand">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control type="text" value={this.state.designer.brand} onChange={e => this.handleInputChange(e)} name="brand" />
                            </Form.Group>
                            <Form.Group controlId="model">
                                <Form.Label>Modelo</Form.Label>
                                <Form.Control type="text" value={this.state.designer.model} onChange={e => this.handleInputChange(e)} name="model" />
                            </Form.Group>

                            <Form.Group controlId="caption">
                                <Form.Label>Caption</Form.Label>
                                <Form.Control type="text" value={this.state.caption} onChange={e => this.handleInputChange(e)} name="caption" />
                            </Form.Group>
                            <Form.Group controlId="length">
                                <Form.Label>Longitud</Form.Label>
                                <Form.Control type="text" value={this.state.dimension.length} onChange={e => this.handleInputChange(e)} name="length" />
                            </Form.Group>
                            <Form.Group controlId="weight">
                                <Form.Label>Peso</Form.Label>
                                <Form.Control type="number" value={this.state.dimension.weight} onChange={e => this.handleInputChange(e)} name="weight" />
                            </Form.Group>
                            <Form.Group controlId="height">
                                <Form.Label>Altura</Form.Label>
                                <Form.Control type="text" value={this.state.dimension.height} onChange={e => this.handleInputChange(e)} name="height" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="fuelType">
                                <Form.Label>Combustible</Form.Label>
                                <Form.Control type="text" value={this.state.specifications.fuelSpecifications.fuelType} onChange={e => this.handleInputChange(e)} name="fuelType" />
                            </Form.Group>
                            <Form.Group controlId="fuelConsume">
                                <Form.Label>Consumo</Form.Label>
                                <Form.Control type="number" value={this.state.specifications.fuelSpecifications.fuelConsume} onChange={e => this.handleInputChange(e)} name="fuelConsume" />
                            </Form.Group>

                            <Form.Group controlId="cv">
                                <Form.Label>CV</Form.Label>
                                <Form.Control type="number" value={this.state.specifications.cv} onChange={e => this.handleInputChange(e)} name="cv" />
                            </Form.Group>

                            <Form.Group controlId="kilometers">
                                <Form.Label>Kilometros</Form.Label>
                                <Form.Control type="number" value={this.state.specifications.kilometers} onChange={e => this.handleInputChange(e)} name="kilometers" />
                            </Form.Group>

                            <Form.Group controlId="year">
                                <Form.Label>Año</Form.Label>
                                <Form.Control type="number" value={this.state.specifications.year} onChange={e => this.handleInputChange(e)} name="year" />
                            </Form.Group>

                            <Form.Group controlId="price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" value={this.state.price} onChange={e => this.handleInputChange(e)} name="price" />
                            </Form.Group>

                            <Form.Group controlId="image">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="text" value={this.state.image} onChange={e => this.handleInputChange(e)} name="image" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Col lg={12}>
                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                        </Form.Group>
                    </Col>

                    <Button variant="dark" style={{ width: '100%', margin: '50px auto' }} type="submit">Crear furgoneta</Button>
                </Form>

            </Container>
        )
    }

}

export default NewVan