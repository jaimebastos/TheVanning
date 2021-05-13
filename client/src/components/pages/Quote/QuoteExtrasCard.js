import { Component } from "react";
import { Form } from "react-bootstrap";

class DimensionVan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extras: []
    };
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.props.onInputChange(this.state);
    });
  }

  render() {
    return (
      <>
      
      </>
    );
  }
}

export default DimensionVan;
