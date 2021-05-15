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

                        <row>
                            <Col md={6}>
                                <Form.Group className controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control className="form__input" type="text" value={this.props.selectedVan.name} readOnly name="name" />
                                </Form.Group>
                            </Col>
                        </row>
                }
            </>
        )
    }
}

export default AutoCompletedForm