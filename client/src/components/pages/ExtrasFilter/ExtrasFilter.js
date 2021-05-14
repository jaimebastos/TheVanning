import { Container } from "react-bootstrap";
import { Component } from "react";
import ExtrasService from "./../../../service/extras.service";

import ExtrasList from "../Extras/Extras-list";

class ExtrasFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extras: [],
    };
    this.extrasService = new ExtrasService();
  }

  componentDidMount() {
    this.loadExtras();
  }

  componentDidUpdate(previousProps, prevState) {
   if(previousProps.match.params.category !== this.props.match.params.category){
     this.loadExtras()
   }
  
  }

  loadExtras() {
    const { category } = this.props.match.params;

    this.extrasService
      .filterByCategory(category)
      .then((response) => {
        this.setState({ extras: response.data })
      })
      .catch((err) => console.log("ERROR, YA VEREMOS QUE HACEMOS", err));
  }

  render() {
    return (
      <Container>
        <hr />
        <ExtrasList extras={this.state.extras} />
      </Container>
    );
  }
}

export default ExtrasFilter;
