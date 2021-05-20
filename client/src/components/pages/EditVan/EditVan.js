import { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import VansService from '../../../service/vans.service'
import DesignerVan from '../VansForm/DesignerVan'
import DimensionVan from '../VansForm/DimensionVan'
import SpecificationsVan from '../VansForm/SpecificationsVan'
import UploadsService from "../../../service/upload.service";
import SpinnerGif from './../common/Spinner'

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
            disabled: false
        }
        this.VansService = new VansService()
        this.copyVans = undefined
        this.uploadsService = new UploadsService()
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

    componentDidMount() { this.loadVan() }

    designerOnChange(designer) { this.setState({ designer }) }

    dimensionOnChange(dimension) { this.setState({ dimension })}

    specificationsOnChange(specifications) {
        console.log(specifications)
        this.setState({ specifications })
    }

    loadVan() {
        this.VansService
            .getOneVan(this.props.match.params.vans_id)
            .then(response => {
                this.setState(response.data)
            })
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }

    handleFileUpload(e) {
        this.setState({disabled: true})
        const uploadData = new FormData();

         for(let i = 0; i < e.target.files.length; i++) {
            uploadData.append("imageData", e.target.files[i]);
        }

        this.uploadsService
            .uploadimage(uploadData)
            .then(response => {
                this.setState({ image: response.data.secure_url, disabled: false })
            })
            .catch(err => console.log('errooooor', err))
  }

    render() {
        return (
            !this.state._id
                ?
                <h1><SpinnerGif /></h1>
                :
                < Container >
                    <Form onSubmit={e => this.handleSubmit(e)} className='margin-to-nav'>
                        <Row className="justify-content-center crearVanButton">
                            <Col md={6}>
                                <Form.Group className="newForm" controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                                </Form.Group>

                                <DesignerVan info={this.state.designer} onInputChange={(e) => this.designerOnChange(e)} />

                                <Form.Group className="newForm" controlId="caption">
                                    <Form.Label>Caption</Form.Label>
                                    <Form.Control type="text" value={this.state.caption} onChange={e => this.handleInputChange(e)} name="caption" />
                                </Form.Group>

                                <DimensionVan info={this.state.dimension} onInputChange={(e) => this.dimensionOnChange(e)} />

                                <SpecificationsVan info={this.state.specifications} onInputChange={(e) => this.specificationsOnChange(e)} />

                                <Form.Group className="newForm" controlId="price">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" value={this.state.price} onChange={e => this.handleInputChange(e)} name="price" />
                                </Form.Group>
                        
                                <Form.Group className="newForm" controlId="description">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                                </Form.Group>

                                <Form.Group className="newForm" controlId="image">
                                        <Form.Label>Imagen</Form.Label>
                                        <Form.Control multiple={true} type="file" className="image-van" value={this.state.imageData} onChange={e => this.handleFileUpload(e)} name="image" />
                                </Form.Group>

                                <Button disabled={this.state.disabled} variant="outline-dark" style={{ width: '100%', marginBottom: '50px'}} type="submit">Editar furgoneta</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container >
        )
    }
}

export default EditVan