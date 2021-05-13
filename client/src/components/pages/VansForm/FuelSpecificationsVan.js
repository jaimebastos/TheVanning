import { Component } from 'react'
import { Form } from 'react-bootstrap'


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
        this.setState({ [name]: value } , () => {
            this.props.onInputChange(this.state)
        })
 }

    render() {
        console.log(this.state)

        return(
            <>
                <Form.Group controlId="fuelType">
                    <Form.Label>Combustible</Form.Label>
                    <Form.Control type="text" value={this.state.fuelType} onChange={e => this.handleInputChange(e)} name="fuelType" />
                </Form.Group>
                <Form.Group controlId="fuelConsume">
                    <Form.Label>Consumo</Form.Label>
                    <Form.Control type="number" value={this.state.fuelConsume} onChange={e => this.handleInputChange(e)} name="fuelConsume" />
                </Form.Group>
            </>
        )
    }

}

export default FuelSpecificationsVan