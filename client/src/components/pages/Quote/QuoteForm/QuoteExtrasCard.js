import { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import ExtrasQuoteCard from "./ExtrasQuoteCard";

class QuoteExtras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extras: [...this.props.extras],
      checkedExtras: []
    };
  }

  handleChangeChk(e, elm) {
    console.log(elm, e)
    const copyExtras = this.state.checkedExtras
    let index

    if (e.target.checked) {
      copyExtras.push(elm)
    } else {
      index = copyExtras.indexOf(elm)
      copyExtras.splice(index, 1)
    }
    this.setState({
      checkedExtras: copyExtras
    }, this.props.onChecked(this.state.checkedExtras))

  }


  render() {
    return (
     
      <div className="quoteExtras">
        <Form.Group controlId="formBasicCheckbox">
          <Row>
              {this.state.extras.map((elm) => (
                <Col md={4} sm={12}>
                <ExtrasQuoteCard key={elm._id} handleChange={(e, cardData) => this.handleChangeChk(e, cardData)} data={elm} />
                </Col>
              ))}
          </Row>
        </Form.Group>
      </div>
      );
  }
}

export default QuoteExtras;
