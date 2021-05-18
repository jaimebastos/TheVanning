import { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ExtrasService from "../../../service/extras.service";
import UploadsService from "../../../service/upload.service";

import './NewExtra.css'

class NewExtra extends Component {
  constructor() {
    super();
    this.state = {
      extra: {
        name: '',
        description: '',
        caption: '',
        category: '',
        price: 0,
        image: ''
      }
    }

    this.extrasService = new ExtrasService()
    this.uploadsService = new UploadsService()
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    const extraCopy = { ...this.state.extra }

    extraCopy[name] = value
    this.setState({ extra: extraCopy });
  }


  handleSubmit(e) {

    e.preventDefault()

    this.extrasService
      .createExtras(this.state.extra)
      .then(response => {
        this.props.history.push('/extras')
      })
      .catch(err => console.log('eeeeeeeerror', err))
  }

  handleFileUpload(e) {

    const uploadData = new FormData();
    uploadData.append("imageData", e.target.files[0]);

    this.uploadsService
      .uploadSingleImage(uploadData)
      .then(response => {
        const extraCopy = { ...this.state.extra };
        extraCopy.image = response.data.secure_url

        this.setState({ extra: extraCopy })
      })
      .catch(err => console.log('errooooor', err))
  }

  render() {
    return (
      <>
        <Container>
          <div className="extrasForm margin-to-nav">
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.extra.name}
                  onChange={(e) => this.handleInputChange(e)}
                  name="name"
                />
              </Form.Group>

              <Form.Group controlId="caption">
                <Form.Label>Descripcion corta</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.extra.caption}
                  onChange={(e) => this.handleInputChange(e)}
                  name="caption"
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.extra.description}
                  onChange={(e) => this.handleInputChange(e)}
                  name="description"
                />
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label>Categorias</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.extra.category}
                  onChange={(e) => this.handleInputChange(e)}
                  name="category"
                >
                  <option>Selecciona Uno</option>
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
                  value={this.state.extra.price}
                  onChange={(e) => this.handleInputChange(e)}
                  name="price"
                />
              </Form.Group>

              <Form.Group controlId="imageUrl">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" onChange={(e) => this.handleFileUpload(e)} />
              </Form.Group>

              <Button variant="dark" style={{ width: "100%" }} type="submit">
                crear extra
              </Button>
            </Form>
          </div>
        </Container>
      </>
    );
  }
}

export default NewExtra;
