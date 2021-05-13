import { Component } from "react";
import { Row, Modal } from "react-bootstrap";
import EditExtra from "../EditExtra/EditExtra";
import ExtrasDetails from "../ExtrasDetails/ExtrasDetails";
import ExtrasService from "./../../../service/extras.service";
import ExtrasCard from "./Extras-card";

class ExtrasList extends Component {
  constructor(props) {
    super()
    this.state = {
      extras: undefined,
      extraID: undefined,
      showModal: false,
      showEditModal: false,
      isEditing: true,
    }
    this.extrasService = new ExtrasService
  }
  componentDidMount() {
    this.loadExtras()
  }
  loadExtras() {
    console.log(this.props)
    this.extrasService
      .getAllExtras()
      .then(response => {
        console.log('vamossssss', response)
        this.setState({ extras: response.data })
      })
      .catch(err => console.log('ERROR, YA VEREMOS QUE HACEMOS', err))
  }

  showModal(boleean) {
    this.setState({ showModal: boleean })
  }

  editModal(boleean){
    this.setState({showEditModal: boleean})
  }

  setExtraID(id) {
    this.setState({
      extraID: id
    })
  }

  isEditingModal(boolean){
    this.setState({isEditing: boolean})
  }

  render() {
    const { extras } = this.state
    return !extras ? (
      <h1>CARGANDO</h1>
    ) : (
      <>
        <Row>
          {extras.map((elm) => (
            <ExtrasCard
              key={elm._id}
              {...elm}
              saveID={(id) => this.setExtraID(id)}
              displayModal={(bool) => this.showModal(bool)}
              showEditModal={(bool) => this.isEditingModal(bool)}
            />
          ))}
        </Row>

        <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
          <Modal.Header>
            <Modal.Title>{this.state.isEditing ? "Editar" : "Detalles de la característica"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.isEditing ? (
              <EditExtra
                id={this.state.extraID}
                closeModal={() => this.setState({ showModal: false })}
                refresh={() => this.loadExtras()}
              />
            ) : (
              <ExtrasDetails
                id={this.state.extraID}
                closeModal={() => this.setState({ showModal: false })}
                refresh={() => this.loadExtras()}
              />
            )}
          </Modal.Body>
        </Modal>
      </>
    );
  }

}

export default ExtrasList