import { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ExtrasService from "../../../service/extras.service";
import UploadsService from "../../../service/upload.service";

import './NewExtra.css'

class NewExtra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: {
        name: "",
        description: "",
        caption: "",
        category: "",
        price: 0,
        errorMessage: undefined,
        disabled: false
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
      .catch(err => {
        this.setState({ errorMessage: err.response.data })
        console.log(this.state.errorMessage)
      })
  }

  handleFileUpload(e) {
    this.setState({ disabled: true })
    const uploadData = new FormData();
    uploadData.append("imageData", e.target.files[0]);

    this.uploadsService
      .uploadSingleImage(uploadData)
      .then(response => {
        const extraCopy = { ...this.state.extra };
        extraCopy.image = response.data.secure_url
        this.setState({ extra: extraCopy, disabled: false })
      })
      .catch(err => console.log('errooooor', err))
  }

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center crearExtraButton">
            <Col md={6}>
              <div className="extrasForm margin-to-nav">
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                  <Form.Group className="newExtraForm" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.extra.name}
                      onChange={(e) => this.handleInputChange(e)}
                      name="name"
                    />
                  </Form.Group>

                  <Form.Group className="newExtraForm" controlId="caption">
                    <Form.Label>Descripcion corta</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.extra.caption}
                      onChange={(e) => this.handleInputChange(e)}
                      name="caption"
                    />
                  </Form.Group>

                  <Form.Group className="newExtraForm" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.extra.description}
                      onChange={(e) => this.handleInputChange(e)}
                      name="description"
                    />
                  </Form.Group>

                  <Form.Group className="newExtraForm" controlId="category">
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

                  <Form.Group className="newExtraForm" controlId="price">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                      type="number"
                      value={this.state.extra.price}
                      onChange={(e) => this.handleInputChange(e)}
                      name="price"
                    />
                  </Form.Group>

                  <Form.Group className="newExtraForm" controlId="imageUrl">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" onChange={(e) => this.handleFileUpload(e)} />
                  </Form.Group>

                  <Button disabled={this.state.disabled} variant="outline-dark" style={{ width: "100%", marginBottom: '50px' }} type="submit">
                    crear extra
                    </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default NewExtra;
