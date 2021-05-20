import { Container } from "react-bootstrap";
import ExtrasList from "./Extras-list";
import { Component } from 'react'
import ExtrasService from "./../../../service/extras.service";
import "./Extras.css";

class Extras extends Component {

  constructor() {
    super()
    this.state = {
      extras: []
    }
    this.extrasService = new ExtrasService();
  }

  componentDidMount() {
    this.loadExtras()
  }

  loadExtras() {

    this.extrasService
      .getAllExtras()
      .then(response => {
        this.setState({ extras: response.data })
      })
      .catch(err => console.log('ERROR, YA VEREMOS QUE HACEMOS', err))
  }

  render() {
    return (
      <Container >
        <ExtrasList user={this.props.loggedUser} extras={this.state.extras} loadExtras={() => this.loadExtras()} />
      </Container>
    );
  }
};

export default Extras;
