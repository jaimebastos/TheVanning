import { Component } from 'react'
import { Col, Form } from 'react-bootstrap'

class VanBaseQuote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vans: this.props.vans,
            selectedVan: ""
        }
    }

    handleInputChange(e) {
        const { value } = e.target
        this.setState({ selectedVan: value }, () => {
            this.props.onSelectChange(this.state.selectedVan)
        })
    }

    render() {
        return (
            <Col md={6}>
                <Form.Group>
                    <Form.Label>Elige tu base</Form.Label>
                    <Form.Control as="select" value={this.state.selectedVan} onChange={(e) => this.handleInputChange(e)} name="van">
                        <option>Selecciona la base de tu Camper</option>
                        {this.state.vans.map(elm => <option key={elm._id}>{`${elm.designer.brand} ${elm.designer.model}`}</option>)}
                    </Form.Control>
                </Form.Group>
            </Col>
        )
    }
}

export default VanBaseQuote