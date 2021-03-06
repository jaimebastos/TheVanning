import { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import VansService from '../../../service/vans.service'
import DesignerVan from '../VansForm/DesignerVan'
import DimensionVan from '../VansForm/DimensionVan'
import SpecificationsVan from '../VansForm/SpecificationsVan'


class EditVan extends Component {
    constructor(props) {
        super(props)
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
        let { name, value } = e.target
        this.setState({ [name]: value, })
    }

    handleSubmit(e) {

        e.preventDefault()
        const { vans_id } = this.props.match.params
        const obj = this.state

        this.VansService
            .updateVan(vans_id, obj)
            .then(() => this.props.history.push('/vans'))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadVan()
    }

    designerOnChange(designer) { this.setState({ designer }) }

    dimensionOnChange(dimension) {
        this.setState({ dimension })
    }

    specificationsOnChange(specifications) {
        console.log(specifications)
        this.setState({ specifications })
    }

    loadVan() {
        this.VansService
            .getOneVan(this.props.match.params.vans_id)
            .then(response => {
                // const vans  = response.data
                this.setState(response.data)
            })
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }

    render() {
        return (
            !this.state._id
                ?
                <h1>CARGANDO</h1>
                :

                < Container >

                    <Form onSubmit={e => this.handleSubmit(e)}>

                        <Row className="justify-content">
                            <Col md={6}>
                                <Form.Group controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                                </Form.Group>


                                <DesignerVan info={this.state.designer} onInputChange={(e) => this.designerOnChange(e)} />


                                <Form.Group controlId="caption">
                                    <Form.Label>Caption</Form.Label>
                                    <Form.Control type="text" value={this.state.caption} onChange={e => this.handleInputChange(e)} name="caption" />
                                </Form.Group>

                                <DimensionVan info={this.state.dimension} onInputChange={(e) => this.dimensionOnChange(e)} />

                            </Col>

                            <Col md={6}>

                                <SpecificationsVan info={this.state.specifications} onInputChange={(e) => this.specificationsOnChange(e)} />


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
                                <Form.Label>Descripci??n</Form.Label>
                                <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                            </Form.Group>
                        </Col>

                        <Button variant="dark" style={{ width: '100%', margin: '50px auto' }} type="submit">Editar furgoneta</Button>
                    </Form>

                </Container >
        )
    }

}

export default EditVan