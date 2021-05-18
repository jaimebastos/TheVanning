import { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import VanBaseQuote from "./QuoteForm/VanBaseQuote";
import AutoCompletedForm from "./QuoteForm/AutoCompletedForm"
import QuoteExtras from "./QuoteForm/QuoteExtrasCard";
import './QuoteForm.css'
import QuoteService from "../../../service/Quote.service";
import VansService from "../../../service/vans.service"



class QuoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedVan: undefined,
            price: undefined,
            checkedExtras: []
        }
        this.quoteService = new QuoteService();
        this.vansService = new VansService();

    }



    handleOnSubmit(e) {
        e.preventDefault();

        const newQuoteVan = { ...this.state.selectedVan }
        delete newQuoteVan._id
        newQuoteVan.extras = [...this.state.checkedExtras]
        newQuoteVan.price = this.state.price
        newQuoteVan.isCustomized = true

        this.vansService
            .createVan(newQuoteVan)
            .then(res => this.quoteService.createQuote({ owner: this.props.loggedUser._id, van: res.data._id, status: "Confirmed" }))
            .then(res => console.log("Hola"))
            .catch(err => console.log(err))



    }

    findElm(elm) {
        return this.props.baseVans.find(elem => `${elem.designer.brand} ${elem.designer.model}` === elm)
    }

    selectedVanChange(elm) {
        const data = this.findElm(elm)
        this.setState({
            selectedVan: data,
            price: data.price,
            basePrice: data.price
        })
    }

    formatPrice(num) {
        console.log(num)
        let finalPrice = String(num).split(".")

        return parseInt(finalPrice[0] + finalPrice[1])
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    checkedExtras(arr) {
        const idArr = []

        const initAcc = this.formatPrice(this.state.basePrice)
        const finalPrice = arr.reduce((acc, elm) => {
            idArr.push(elm._id, elm.price)
            return acc + elm.price
        }, initAcc)

        const formatedPrice = this.numberWithCommas(finalPrice)

        this.setState({
            price: formatedPrice,
            checkedExtras: [...idArr]
        })
    }

    render() {
        return (
            (this.props.baseVans.length === 0) ?
                <h1>CARGANDO</h1>
                :
                <Form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <Row className="justify-content">
                        <VanBaseQuote vans={this.props.baseVans} onSelectChange={elm => this.selectedVanChange(elm)} />
                    </Row>

                    <AutoCompletedForm selectedVan={this.state.selectedVan} />

                    {(!this.state.selectedVan) ? <></> : <><QuoteExtras extras={this.props.extras} onChecked={arr => this.checkedExtras(arr)} />
bhj
                        <Col md={12} className="justify-content-center">
                            <h1 className="prices-item">Coste total de la furgoneta: </h1><h2 className="prices-item">{this.state.price} €</h2>
                        </Col></>
                    }
                    <Button variant="dark" style={{ width: "100%", margin: "50px auto" }} type="submit">
                        Pedir presupuesto
          </Button>
                </Form>
        )
    }
}

export default QuoteForm;