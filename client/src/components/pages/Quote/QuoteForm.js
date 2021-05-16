import { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import VanBaseQuote from "./QuoteForm/VanBaseQuote";
import AutoCompletedForm from "./QuoteForm/AutoCompletedForm"

class QuoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedVan: undefined,
            price: undefined
        }
    }

    handleOnSubmit(e) {
        e.preventDefault();
    }

    findElm(elm) {
        return this.props.baseVans.find(elem => `${elem.designer.brand} ${elem.designer.model}` === elm)
    }

    selectedVanChange(elm) {
        const data = this.findElm(elm)
        this.setState({
            selectedVan: data,
            price: data.price
        })
    }

    render() {
        return (
            (this.props.baseVans.length == 0) ?
                <h1>CARGANDO</h1>
                :
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Row className="justify-content">
                        <VanBaseQuote vans={this.props.baseVans} onSelectChange={elm => this.selectedVanChange(elm)} />
                    </Row>

                    <AutoCompletedForm selectedVan={this.state.selectedVan} price={this.state.price} />


                    <Button variant="dark" style={{ width: "100%", margin: "50px auto" }} type="submit">
                        Pedir presupuesto
          </Button>
                </Form>
        )
    }
}

export default QuoteForm;