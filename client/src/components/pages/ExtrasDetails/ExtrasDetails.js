import { Component } from "react";
import ExtrasService from "../../../service/extras.service";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
    
    deleteExtra(){
        console.log(this.props)
        const { id } = this.props

        this.extrasService
          .deleteOneExtra(id)
          .then(() =>{
              this.props.closeModal();
              this.props.refresh();
          })
          .catch((err) => console.log("eeerrrroorrr", err));

    }
    render() {

        const { extra } = this.state

        return (
          <Container>
            {!this.state.extra ? (
              <h1>cargando...</h1>
            ) : (
              <>
                <h1>{extra.name}</h1>
                <img src={extra.image}></img>
                <Button
                  onClick={() => {
                   this.deleteExtra()
                  }}
                ></Button>
              </>
            )}
          </Container>
        );
    }
}

export default ExtrasDetails