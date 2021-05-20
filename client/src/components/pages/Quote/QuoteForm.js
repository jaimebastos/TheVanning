import { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import VanBaseQuote from "./QuoteForm/VanBaseQuote";
import AutoCompletedForm from "./QuoteForm/AutoCompletedForm"
import './QuoteForm.css'
import QuoteService from "../../../service/Quote.service";
import VansService from "../../../service/vans.service"
import QuoteExtras from "./QuoteForm/QuoteExtrasCard"
import SpinnerGif from './../common/Spinner'
class QuoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedVan: undefined,
            price: undefined,
            checkedExtras: undefined
        }
        this.quoteService = new QuoteService();
        this.vansService = new VansService();
    }

    handleOnSubmit(e) {
        e.preventDefault();
        console.log(this.state.selectedVan._id)
        console.log(this.props)
    }

    findElm(elm) {
        return this.props.baseVans.find(elem => `${elem.designer.brand} ${elem.designer.model}` === elm)
    }

    formatToNumber(n) {
        let formated = n.split(".")
        return parseInt(formated[0].concat(formated[1]))
    }

    selectedVanChange(elm) {
        const data = this.findElm(elm)
        this.setState({
            selectedVan: data,
            price: data.price,
            basePrice: data.price
        })
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    checkedExtras(arr) {
        const initAcc = this.formatToNumber(this.state.basePrice)
        const finalPrice = this.numberWithCommas(arr.reduce((acc, elm) => acc + parseInt(elm.price), initAcc))

        this.setState({
            price: finalPrice
        })
    }

    render() {
        console.log(this.props.extras);
        return (
            (this.props.baseVans.length === 0) ?
                <h1><SpinnerGif /></h1>
                :
                <Form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <Row className="justify-content-center quoteForm">
                        <VanBaseQuote vans={this.props.baseVans} onSelectChange={elm => this.selectedVanChange(elm)} />
                    </Row>

                    <AutoCompletedForm selectedVan={this.state.selectedVan} />

                    {(!this.state.selectedVan) ? <></> : <><QuoteExtras extras={this.props.extras} onChecked={arr => this.checkedExtras(arr)} />

                        <Col md={12} className="justify-content-center">
                            <h1 className="prices-item">Coste total de la furgoneta: </h1><h2 className="prices-item pricesItem">{this.state.price} €</h2>
                        </Col></>
                    }
                    <Row className="justify-content-center">
                        <Button className="buttonBudget" variant="outline-dark" style={{ width: "50%" }} type="submit">
                            Pedir presupuesto
                    </Button>
                    </Row>
                </Form>
        )
    }
}

export default QuoteForm;