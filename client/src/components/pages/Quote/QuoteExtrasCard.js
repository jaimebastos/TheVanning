import { Component } from "react";
import { Form } from "react-bootstrap";

class QuoteExtras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extras: []
    };
  }
  


  render() {
    return (
      <>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={this.props.name} />
        </Form.Group>
      </>
    );
  }
}

export default QuoteExtras;
