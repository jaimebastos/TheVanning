import { Component } from "react";
import ExtrasService from "../../../service/extras.service";
import { Container,Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './ExtrasDetails.css'

class ExtrasDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extra: undefined
    }
    this.extrasService = new ExtrasService
  }
  componentDidMount() {
    const { id } = this.props
    this.extrasService
      .getOneExtra(id)
      .then(response => {
        this.setState({ extra: response.data })
      })
  }

  deleteExtra() {
    const { id } = this.props

    this.extrasService
      .deleteOneExtra(id)
      .then(() => {
        this.props.closeModal();
        this.props.refresh();
      })
      .catch((err) => console.log("eeerrrroorrr", err));

  }
  render() {

    const { extra } = this.state

    return (
      <Container>
        {!this.state.extra ? (
          <h1>cargando...</h1>
        ) : (
          <>
            <h1>{extra.name}</h1>

            <Row>
              <Col sm={12} lg={6}>
                <img className="detailsimg" src={extra.image}></img>
              </Col>
              <Col sm={12} lg={6}>
                <p>{extra.description}</p>
                <span>{extra.price}€</span>
              </Col>
            </Row>

            <Button
              onClick={() => {
                this.deleteExtra();
              }}
              variant="outline-secondary"
              className="btn btn-outline-dark botonDel"
            >
              Eliminar
            </Button>
          </>
        )}
      </Container>
    );
  }
}

export default ExtrasDetails