import { Component } from "react";
import { Row, Modal } from "react-bootstrap";
import ExtrasDetails from "../ExtrasDetails/ExtrasDetails";
import ExtrasService from "./../../../service/extras.service";
import ExtrasCard from "./Extras-card";

class ExtrasList extends Component{
    constructor(props){
        super()
        this.state={
            extras: undefined,
            showModal: false
        }
        this.extrasService = new ExtrasService
    }
    componentDidMount(){
        this.loadExtras()
    }
    loadExtras(){
        console.log(this.props)
        this.extrasService
            .getAllExtras()
            .then(response=>{
                console.log('vamossssss', response)
                this.setState({extras: response.data})
            })
            .catch(err => console.log('ERROR, YA VEREMOS QUE HACEMOS', err))
    }
    showModal(boleean){
        this.setState({ showModal: boleean })
        
    }

    render(){
        const {extras} = this.state
        return !extras ? (
          <h1>CARGANDO</h1>
        ) : 
        (
          <>
            <Row>
              {extras.map((elm) => (
                <ExtrasCard key={elm._id} {...elm} displayModal={bool => this.showModal(bool)} />
              ))}
            </Row>

            <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
              <Modal.Header>
                {" "}
                <Modal.Title>Crear montaña rusa</Modal.Title>{" "}
              </Modal.Header>
              <Modal.Body>
                <ExtrasDetails
                  closeModal={() => this.setState({ showModal: false })}
                  refreshCoasters={() => this.loadExtras()}
                />
              </Modal.Body>
            </Modal>
          </>
        );
    }

}

export default ExtrasList