import { Component } from 'react'
import { Form } from 'react-bootstrap'


class DimensionVan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            length: this.props.info.length,
            weight: this.props.info.weight,
            height: this.props.info.height,
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
                <Form.Group controlId="length">
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="text" value={this.state.length} onChange={e => this.handleInputChange(e)} name="length" />
                </Form.Group>
                <Form.Group controlId="weight">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="number" value={this.state.weight} onChange={e => this.handleInputChange(e)} name="weight" />
                </Form.Group>
                <Form.Group controlId="height">
                    <Form.Label>Altura</Form.Label>
                    <Form.Control type="text" value={this.state.height} onChange={e => this.handleInputChange(e)} name="height" />
                </Form.Group>
            </>
        )
    }

}

export default DimensionVan