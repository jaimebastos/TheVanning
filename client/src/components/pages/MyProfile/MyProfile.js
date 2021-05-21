import React, { Component } from "react";
import QuoteService from "../../../service/Quote.service";

class MyProfile extends Component {
    constructor() {
        super()
        this.state = {
            quotes: []
        }
        this.quoteService = new QuoteService()
    }

    loadQuotes() {
        const { id } = this.props.match.params
        this.quoteService.getClientsQuote(id)
            .then(res => this.setState({
                quotes: [...res.data]
            })).catch(err => {
                const errorMessage = err.response.data.errorMessage;
                this.props.handleAlert(true, errorMessage);
            })
    }

    componentDidMount() {
        this.loadQuotes()
    }
    render() {
        return (
            <h1>HOLA</h1>
        )
    }

}

export default MyProfile