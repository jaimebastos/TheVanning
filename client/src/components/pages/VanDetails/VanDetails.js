import { Component } from 'react'
import VansService from '../../../service/vans.service'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './VanDetails.css'
import VanGallery from './VanGallery'


class VanDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            van: undefined
        }
        this.VansService = new VansService()
    }

    componentDidMount() {

        const { id } = this.props.match.params

        this.VansService
            .getOneVan(id)
            .then(response => {
                this.setState({ van: response.data })
            })
            .catch(err => console.log(err))
    }

    deleteVan() {

    const { id } = this.props.match.params

    this.VansService
      .deleteOneVan(id)
      .then(() => this.props.history.push('/vans'))
      .catch((err) => console.log("eeerrrroorrr", err));
  }


    render() {

        const { van } = this.state

        return (

            <Container>

                {
                    !this.state.van
                        ?
                        <h1>Cargando...</h1>
                        :
                        <>
                            <h1>{van.name}</h1>
                            <hr />
                            <Row className="justify-content-between">
                                <Col md={6}>
                                    <h3 className="Informacion">Información:</h3>
                                    <p className="p-description">{van.description}</p>
                                    <hr />
                                    <h3>Especificaciones:</h3>
                                    <p><strong>Diseñador: </strong> {van.designer.brand}, {van.designer.model}</p>
                                    <p><strong>Dimensiones: </strong> {van.dimension.length}, {van.dimension.height},  {van.dimension.weight} kg</p>
                                    <p><strong>Consumo: </strong> {van.specifications.fuelSpecifications.fuelType} {van.specifications.fuelSpecifications.fuelConsume} l /100</p>
                                    <p><strong>Año: </strong> {van.specifications.year}</p>
                                    <p><strong>Kilometros: </strong> {van.specifications.kilometers}</p>
                                    <p><strong>CV: </strong> {van.specifications.cv}</p>
                                    <p><strong>Precio: </strong>{van.price} €</p>
                                    <hr />
                                    <Link to="/vans" className="btn btn-outline-dark boton-listado">Volver al listado</Link>
                                    <Button variant="outline-secondary" className="btn btn-outline-dark boton-listado" style={{ width: '20%', height: '40px' }} onClick={() => {this.deleteVan() }}> Eliminar</Button>
                                    
                                </Col>

                                <Col md={5}>
                                    <VanGallery img={van.image} alt={van.name} />
                                </Col>

                            </Row>
                        </>
                }

            </Container>
        )

    }

}

export default VanDetails

