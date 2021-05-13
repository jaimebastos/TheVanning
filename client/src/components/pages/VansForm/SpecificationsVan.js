import { Component } from 'react'
import { Form } from 'react-bootstrap'
import FuelSpecificationsVan from '../VansForm/FuelSpecificationsVan'

class SpecificationsVan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fuelSpecifications: {
                fuelType: '',
                fuelConsume: 0
            },
            cv: this.props.info.cv,
            kilometers: this.props.info.kilometers,
            year: this.props.info.year,
        }
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => {
            this.props.onInputChange(this.state)
        })
    }

    fuelSpecificationsOnChange(fuelSpecifications) {
        this.setState({ fuelSpecifications })
    }

    render() {
        return (
            <>
                <Form.Group controlId="cv">
                    <Form.Label>CV</Form.Label>
                    <Form.Control type="number" value={this.state.cv} onChange={e => this.handleInputChange(e)} name="cv" />
                </Form.Group>

                <Form.Group controlId="kilometers">
                    <Form.Label>Kilometros</Form.Label>
                    <Form.Control type="number" value={this.state.kilometers} onChange={e => this.handleInputChange(e)} name="kilometers" />
                </Form.Group>

                <Form.Group controlId="year">
                    <Form.Label>Año</Form.Label>
                    <Form.Control type="number" value={this.state.year} onChange={e => this.handleInputChange(e)} name="year" />
                </Form.Group>

                <FuelSpecificationsVan info={this.props.info.fuelSpecifications} onInputChange={(e) => this.fuelSpecificationsOnChange(e)} />


            </>
        )
    }

}

export default SpecificationsVan