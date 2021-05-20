import { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import './AutoCompletedForm.css'

const AutoCompletedForm = props => {
    console.log(props)
    return (
        <>
            {
                !props.selectedVan ?
                    <>
                    </>
                    :
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form.Group className="budgetForm" controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control className="form__input" type="text" value={props.selectedVan.name} readOnly name="name" />
                            </Form.Group>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="budgetForm" controlId="fuel">
                                        <Form.Label>Combustible</Form.Label>
                                        <Form.Control className="form__input" type="text" value={props.selectedVan.specifications.fuelSpecifications.fuelType} readOnly name="fuel" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="budgetForm" controlId="Dimension">
                                        <Form.Label>Dimensiones</Form.Label>
                                        <Form.Control className="form__input" type="text" value={`${props.selectedVan.dimension.length} ${props.selectedVan.dimension.height}`} readOnly name="fuel-consume" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="budgetForm" controlId="fuel-consume">
                                        <Form.Label>Consumo</Form.Label>
                                        <Form.Control className="form__input" type="text" value={props.selectedVan.specifications.fuelSpecifications.fuelConsume} readOnly name="fuel-consume" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="budgetForm" controlId="km">
                                        <Form.Label>Kms recorridos</Form.Label>
                                        <Form.Control className="form__input" type="text" value={props.selectedVan.specifications.kilometers || "No tenemos infomacion"} readOnly name="km" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="budgetForm" controlId="Weight">
                                        <Form.Label>Peso</Form.Label>
                                        <Form.Control className="form__input" type="text" value={props.selectedVan.dimension.weight} readOnly name="fuel-consume" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            }
        </>
    )
}

export default AutoCompletedForm