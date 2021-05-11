import { Component } from "react";
import ExtrasService from "./../../../service/extras.service";

class ExtrasList extends Component{
    constructor(){
        super()
        this.state={
            extras: undefined,
        }
        this.extrasService = new ExtrasService
    }
    componentDidMount(){
        this.loadExtras()
    }
    loadExtras(){
        this.extrasService
            .getAllExtras()
            .then(response => this.setState({extras: response.data}))
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }
    render(){
        const {extras} = this.state
        return(
            extras.map(elm => <h1>elm.name</h1>)
        )
    }

}

export default ExtrasList