import { Component } from 'react'
import { Form } from 'react-bootstrap'


class DesignerVan extends Component {
    constructor(props) {
        super(props)
        this.state = {
                brand: this.props.info.brand,
                model: this.props.info.model
        }
    }
 
    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value } , () => {
            this.props.onInputChange(this.state)
        })
 }

    render() {
        console.log(this.props)
        console.log(this.state)
        return(
            <>
                <Form.Group controlId="brand">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" value={this.state.brand} onChange={e => this.handleInputChange(e)} name="brand" />
                </Form.Group>

                <Form.Group controlId="model">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" value={this.state.model} onChange={e => this.handleInputChange(e)} name="model" />
                </Form.Group>
            </>
        )
    }

}

export default DesignerVan