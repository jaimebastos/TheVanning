import { Component } from "react";
import { Row, Modal, Container } from "react-bootstrap";
import EditExtra from "../EditExtra/EditExtra";
import ExtrasDetails from "../ExtrasDetails/ExtrasDetails";
import ExtrasCard from "./Extras-card";
import { Link } from "react-router-dom";
import FilteredExtras from "../ExtrasFilter/ExtrasFilter";
import ExtrasCheckbox from "../ExtrasFilter/ExtrasCheckbox";
import "./Extras-list.css";
import ExtrasCover from "./Extras-Cover";

class ExtrasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extras: this.props.extras,
      extraID: undefined,
      showModal: false,
      showEditModal: false,
      isEditing: true,
    };
  }

  showModal(boleean) {
    this.setState({ showModal: boleean });
  }

  editModal(boleean) {
    this.setState({ showEditModal: boleean });
  }

  setExtraID(id) {
    this.setState({
      extraID: id,
    });
  }

  isEditingModal(boolean) {
    this.setState({ isEditing: boolean });
  }

  render() {
    const { extras } = this.props;
    return !extras ? (
      <h1>CARGANDO</h1>
    ) : (
      <>
        <Container>
          <ExtrasCover />
          <div className="checkboxx">
            <ExtrasCheckbox />
          </div>
          <div className="list">
            {
              this.props.user && this.props.user.role === "ADMIN" ?
                <Link to="/extras/create" className="btn btn-outline-dark boton-crear-extra">
                  Crear extra
            </Link>
                : <></>
            }

                {extras.map((elm) => (
            <Row>
              {extras.map((elm) => (
                <ExtrasCard
                  key={elm._id}
                  {...elm}
                  saveID={(id) => this.setExtraID(id)}
                  user={this.props.user}
                  displayModal={(bool) => this.showModal(bool)}
                  showEditModal={(bool) => this.isEditingModal(bool)}
                />
              ))}
            </Row>
          </div>
        </Container>

        <Modal size="lg" show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
          <Modal.Header>
            <Modal.Title>{this.state.isEditing ? "Editar" : "Detalles de la característica"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.isEditing ? (
              <EditExtra id={this.state.extraID} closeModal={() => this.setState({ showModal: false })} refresh={this.props.loadExtras} />
            ) : (
              <ExtrasDetails id={this.state.extraID} closeModal={() => this.setState({ showModal: false })} />
            )}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ExtrasList;
