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
                    <Form.Label>Elige la longitud</Form.Label>
                    <Form.Control as="select" value={this.state.length} onChange={(e) => this.handleInputChange(e)} name="length">
                        <option>L1</option>
                        <option>L2</option>
                        <option>L3</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="height">
                    <Form.Label>Elige la altura</Form.Label>
                    <Form.Control as="select" value={this.state.height} onChange={(e) => this.handleInputChange(e)} name="height">
                        <option>H1</option>
                        <option>H2</option>
                        <option>H3</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="weight">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="number" value={this.state.weight} onChange={e => this.handleInputChange(e)} name="weight" />
                </Form.Group>
            </>
        )
    }

}

export default DimensionVan