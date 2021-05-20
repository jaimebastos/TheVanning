import { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
class FuelSpecificationsVan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fuelType: this.props.info.fuelType,
            fuelConsume: this.props.info.fuelConsume
        }
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => {
            this.props.onInputChange(this.state)
        })
    }

    render() {
        return (
            <>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="newForm" controlId="fuelType">
                            <Form.Label>Combustible</Form.Label>
                            <Form.Control type="text" value={this.state.fuelType} onChange={e => this.handleInputChange(e)} name="fuelType" />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="newForm" controlId="fuelConsume">
                            <Form.Label>Consumo l/100</Form.Label>
                            <Form.Control type="number" value={this.state.fuelConsume} onChange={e => this.handleInputChange(e)} name="fuelConsume" />
                        </Form.Group>
                    </Col>
                </Row>
            </>
        )
    }

}

export default FuelSpecificationsVan