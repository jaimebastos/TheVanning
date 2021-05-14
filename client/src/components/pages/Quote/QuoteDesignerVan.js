import { Component } from "react";
import { Form } from "react-bootstrap";

class DesignerVan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      model: '',
    };
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.props.onInputChange(this.state);
    });
  }
  disableModels(){
    

  }

  render() {
    return (
      <>
        <Form.Group controlId="brand">
          <Form.Label>Elige una marca y un modelo</Form.Label>
          <Form.Control as="select" value={this.state.brand} onChange={(e) => this.handleInputChange(e)} name="brand">
            <option>Mercedes</option>
            <option>Citroen</option>
            <option>Peugot</option>
            <option>Renault</option>
            <option>Fiat</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="model">
          <Form.Label>Modelo</Form.Label>
          <Form.Control type="text" value={this.state.model} onChange={(e) => this.handleInputChange(e)} name="model" />
        </Form.Group>
      </>
    );
  }
}

export default DesignerVan;
