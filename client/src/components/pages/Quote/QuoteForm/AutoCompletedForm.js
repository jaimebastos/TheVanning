import { Component } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";
import './AutoCompletedForm.css'

class AutoCompletedForm extends Component {

    render() {
        return (
            <>
                {
                    !this.props.selectedVan ?
                        <>
                        </>
                        :

                        <Row>
                            <Col md={6}>
                                <Form.Group className controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control className="form__input" type="text" value={this.props.selectedVan.name} readOnly name="name" />
                                </Form.Group>

                                <Form.Group className controlId="fuel">
                                    <Form.Label>Tipo de Combustible</Form.Label>
                                    <Form.Control className="form__input" type="text" value={this.props.selectedVan.specifications.fuelSpecifications.fuelType} readOnly name="fuel" />
                                </Form.Group>

                                <Form.Group className controlId="Dimension">
                                    <Form.Label>Dimensiones del vehiculo</Form.Label>
                                    <Form.Control className="form__input" type="text" value={`${this.props.selectedVan.dimension.length} ${this.props.selectedVan.dimension.height}`} readOnly name="fuel-consume" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className controlId="fuel-consume">
                                    <Form.Label>Consumo</Form.Label>
                                    <Form.Control className="form__input" type="text" value={this.props.selectedVan.specifications.fuelSpecifications.fuelConsume} readOnly name="fuel-consume" />
                                </Form.Group>

                                <Form.Group className controlId="km">
                                    <Form.Label>Kms recorridos</Form.Label>
                                    <Form.Control className="form__input" type="text" value={this.props.selectedVan.specifications.kilometers || "No tenemos infomacion"} readOnly name="km" />
                                </Form.Group>

                                <Form.Group className controlId="Weight">
                                    <Form.Label>Peso del vehiculo</Form.Label>
                                    <Form.Control className="form__input" type="text" value={this.props.selectedVan.dimension.weight} readOnly name="fuel-consume" />
                                </Form.Group>
                            </Col>

                            <Col md={10}>
                                <h2>Hola</h2>
                                <h2>{this.props.price}</h2>
                            </Col>
                        </Row>
                }
            </>
        )
    }
}

export default AutoCompletedForm