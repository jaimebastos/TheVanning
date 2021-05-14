import { Component } from 'react'
import { Form } from 'react-bootstrap'
import FuelSpecificationsVan from '../VansForm/FuelSpecificationsVan'

class SpecificationsVan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fuelSpecifications: {
                fuelType: "",
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

        this.setState({ fuelSpecifications }, () => {
            this.props.onInputChange(this.state)
        })
    }

    render() {
        return (
            <>
                <Form.Group controlId="cv">
                    <Form.Label>CV</Form.Label>
                    <Form.Control type="number" value={this.state.cv} onChange={e => this.handleInputChange(e)} name="cv" />
                </Form.Group>

                <Form.Group controlId="kilometers">
                    <Form.Label>Elige los Km</Form.Label>
                    <Form.Control as="select" value={this.state.kilometers} onChange={(e) => this.handleInputChange(e)} name="kilometers">
                        <option>Nueva</option>
                        <option>50.000 - 100.000</option>
                        <option>100.000 -150.000</option>
                        <option>150.000 - 200.000</option>
                        <option>200.000 - 300.000</option>
                        <option>Más de 300.000</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="year">
                    <Form.Label>Año</Form.Label>
                    <Form.Control as="select" value={this.state.year} onChange={(e) => this.handleInputChange(e)} name="year">
                        <option>Nueva</option>
                        <option>2020</option>
                        <option>2015 - 2020</option>
                        <option>2015 - 2010</option>
                        <option>2010 - 2008</option>
                        <option>2008 - 2006</option>
                        <option>2006 - 2004</option>
                    </Form.Control>
                </Form.Group>

                <FuelSpecificationsVan info={this.props.info.fuelSpecifications} onInputChange={(e) => this.fuelSpecificationsOnChange(e)} />


            </>
        )
    }

}

export default SpecificationsVan