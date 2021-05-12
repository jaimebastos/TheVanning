import { Component } from "react";
import ExtrasService from "../../../service/extras.service";
import { Container } from "react-bootstrap";


class ExtrasDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            extra: undefined
        }
        this.extrasService = new ExtrasService
    }
    componentDidMount() {

        const { id } = this.props
        this.extrasService
            .getOneExtra(id)
            .then(response => {
                this.setState({ extra: response.data })
            })
    }
    render() {

        const { extra } = this.state

        return (
            <Container>
                {
                    !this.state.extra ? <h1>cargando...</h1> :
                        <>
                            <h1>{extra.name}</h1>
                        </>
                }
            </Container>
        )
    }
}

export default ExtrasDetails