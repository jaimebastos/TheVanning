import { Component } from "react";
import QuoteService from "../../../service/Quote.service";
import QuoteCard from "./QuoteCard";

class Quote extends Component{
    constructor(){
        super()
        this.state ={
           
        }
    }
    render(){
        return (
         <QuoteCard  />
        );
    }
}

export default Quote