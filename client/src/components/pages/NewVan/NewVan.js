import { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import VansService from '../../../service/vans.service'
import DesignerVan from '../VansForm/DesignerVan'
import DimensionVan from '../VansForm/DimensionVan'
import SpecificationsVan from '../VansForm/SpecificationsVan'
import UploadsService from "../../../service/upload.service";

import './NewVan.css'

class NewVan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            designer: {
                brand: 'Mercedes',
                model: ''
            },
            caption: '',
            description: '',
            dimension: {
                length: 'L1',
                Weight: 0,
                height: 'H1',
            },
            specifications: {
                fuelSpecifications: {
                    fuelType: '',
                    fuelConsume: 0,
                },
                cv: 0,
                kilometers: 'Nueva',
                year: 'Nueva',
            },
            image: '',
            price: 0,
        }
        this.VansService = new VansService()
        this.uploadsService = new UploadsService()
    }

    handleInputChange(e) {
        let { name, value } = e.target
        this.setState({ [name]: value, })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.VansService
            .createVan(this.state)
            .then(() => { 
                this.props.handleAlert(true, "FurgoCamper creada con exito");
                this.props.history.push('/vans'); 
            })
            .catch(err =>{
                const errorMessage = err.response.data.errorMessage;
                this.props.handleAlert(true, errorMessage);
            })
    }

    designerOnChange(designer) { this.setState({ designer }) }

    dimensionOnChange(dimension) { this.setState({ dimension }) }

    specificationsOnChange(specifications) { this.setState({ specifications }) }

    handleFileUpload(e) {

        const uploadData = new FormData();
        //hacer append de varias images
        for(let i = 0; i < e.target.files.length; i++) {
            uploadData.append("imageData", e.target.files[i]);
        }

        //en el backend lo mismo, adaptar a varias
        this.uploadsService
            .uploadimage(uploadData)
            .then(response => 
                this.setState({ image: response.data.secure_url }))
            .catch(err => console.log('errooooor', err))
    }

    render() {
        return (
            < Container >

                <Form onSubmit={e => this.handleSubmit(e)} className='margin-to-nav'>

                    <Row className="justify-content form-crear-van">
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
                                <Form.Control  multiple={true} type="file" className="image-van" value={this.state.imageData} onChange={(e) => this.handleFileUpload(e)} name="image" />
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

            </Container >
        )
    }

}

export default NewVan