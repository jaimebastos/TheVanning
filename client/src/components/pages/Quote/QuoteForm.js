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

    selectedVanChange(elm) {
        const data = this.findElm(elm)
        this.setState({
            selectedVan: data,
            price: data.price,
            basePrice: data.price
        })
    }

    checkedExtras(arr) {
        const initAcc = this.state.basePrice
        const finalPrice = arr.reduce((acc, elm) => acc + elm.price, initAcc)

        this.setState({
            price: finalPrice
        })
    }

    render() {
        return (
            (this.props.baseVans.length == 0) ?
                <h1>CARGANDO</h1>
                :
                <Form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <Row className="justify-content">
                        <VanBaseQuote vans={this.props.baseVans} onSelectChange={elm => this.selectedVanChange(elm)} />
                    </Row>

                    <AutoCompletedForm selectedVan={this.state.selectedVan} />

                    {(!this.state.selectedVan) ? <></> : <><QuoteExtras extras={this.props.extras} onChecked={arr => this.checkedExtras(arr)} />

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