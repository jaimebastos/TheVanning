import { Component } from "react";
import { Form } from "react-bootstrap";
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
      <>
        <Form.Group controlId="formBasicCheckbox">
          {this.state.extras.map((elm) => (
            <ExtrasQuoteCard key={elm._id} handleChange={(e, cardData) => this.handleChangeChk(e, cardData)} data={elm} />
          ))}
        </Form.Group>
      </>
    );
  }
}

export default QuoteExtras;
