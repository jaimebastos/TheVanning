import { Container } from "react-bootstrap";
import { Component } from "react";

import ExtrasService from "../../../service/extras.service";
import QuoteService from "../../../service/Quote.service";
import VansService from "../../../service/vans.service"
import QuoteForm from "./QuoteForm";

class QuoteCard extends Component {
  constructor() {
    super();
    this.state = {
      vans: {
        owner: "",
        designer: {
          brand: "",
          model: "",
        },
        dimension: {
          length: "",
          height: "",
        },
        specifications: {
          kilometers: 0,
          year: 0,
        },
      },
      optionVans: [],
      extras: [],
      price: 0,
    };
    this.extrasService = new ExtrasService();
    this.vansService = new VansService();
    this.quoteService = new QuoteService();
  }

  componentDidMount() {
    this.getAllExtras()
    this.getAllVans()
  }

  getAllVans() {
    this.vansService
      .findBaseVans(false)
      .then(response => {
        this.setState({
          optionVans: response.data
        })
      })
      .catch((err) => console.log("error", err));
  }

  getAllExtras() {
    this.extrasService
      .getAllExtras()
      .then((response) => {
        this.setState({ extras: response.data });
      })
      .catch((err) => console.log("error", err));
  }



  render() {

    return (
      <Container>
        <QuoteForm baseVans={this.state.optionVans} extras={this.state.extras} />
      </Container>
    );
  }
}

export default QuoteCard;
