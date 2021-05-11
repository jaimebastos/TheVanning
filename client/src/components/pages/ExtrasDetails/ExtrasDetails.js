import { Component } from "react";
import ExtrasService from "../../../service/extras.service";
import { Container } from "react-bootstrap";


class ExtrasDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            extra: undefined
        }
        this.extrasService = new ExtrasService
    }
    componentDidMount(){

        const {extras_id} = this.props.match.params
        console.log(this.props.match.params);
        this.extrasService
            .getOneExtra(extras_id)
            .then(response =>{
                console.log(response.data)
                this.setState({extra: response.data})
            })
    }
    render(){

        const {extra} = this.state

        return(
            <Container>
                {
                 !this.state.extra ? <h1>cargando...</h1>:
                 <>
                    <h1>{extra.name}</h1>
                 </>
                }

            </Container>
        )
    }
}

export default ExtrasDetails