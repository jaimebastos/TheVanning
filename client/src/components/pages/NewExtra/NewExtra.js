import { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ExtrasService from "../../../service/extras.service";

import './NewExtra.css'

class NewExtra extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        description: "",
        caption: "",
        category:'',
        price: 0,

    };
    this.extrasService = new ExtrasService()
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e){

    e.preventDefault()

    this.extrasService
      .createExtras(this.state)
      .then(response => console.log('SE HABRA CREADO???', response.data))
      .catch(err => console.log('eeeeeeeerror', err))
  }


  render() {
    return (
      <>
      <Container>
      <div className='extrasForm'>
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={(e) => this.handleInputChange(e)} name="name" />
        </Form.Group>

        <Form.Group controlId="caption">
          <Form.Label>Descripcion corta</Form.Label>
          <Form.Control
            type="text"
            value={this.state.caption}
            onChange={(e) => this.handleInputChange(e)}
            name="caption"
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            value={this.state.description}
            onChange={(e) => this.handleInputChange(e)}
            name="description"
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Categorias</Form.Label>
          <Form.Control
            as="select"
            value={this.state.category}
            onChange={(e) => this.handleInputChange(e)}
            name="category"
          >
            <option>Entretenimiento</option>
            <option>Revestimiento</option>
            <option>Climatización</option>
            <option>Electrodomesticos</option>
            <option>Electrónica</option>
            <option>Electricidad</option>
            <option>Gas</option>
            <option>Agua</option>
            <option>Confort</option>
            <option>Almacenamiento</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={this.state.price}
            onChange={(e) => this.handleInputChange(e)}
            name="price"
          />
        </Form.Group>

        <Form.Group controlId="imageUrl">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" onChange={(e) => this.handleFileUpload(e)} />
        </Form.Group>

        <Button variant="dark" style={{ width: "100%" }} type="submit" disabled={this.state.isUploading}>
          {this.state.isUploading ? "Un momento..." : "Crear montaña rusa"}
        </Button>
      </Form>
      </div>
      </Container>
      </>
    );
  }
}

export default NewExtra;
