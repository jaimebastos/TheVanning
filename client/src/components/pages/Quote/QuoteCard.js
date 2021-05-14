import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Component } from "react";

import DesignerVan from './QuoteDesignerVan';
import DimensionVan from './QuoteDimensionVan';
import SpecificationsVan from './QuoteSpecificationsVan';
import ExtrasService from '../../../service/extras.service';



class QuoteCard extends Component {
  constructor() {
    super();
    this.state = {
        vans:{
            owner: "",
            designer: {
              brand: "",
              model: "",
            },
            dimension: {
              length: "",
              height: "",
            },
            specifications: {
              kilometers: 0,
              year: 0,
            }
        },
      extras: [],
      price: 0,
    };
    this.extrasService = new ExtrasService
  }

  getAllExtras(){

    this.extrasService
        .getAllExtras()
        .then(response =>{
            this.setState({extras: response.data})
            console.log('los extras', response.data)
        })
        .catch(err => console.log('error', err))
  }
  
  designerOnChange(designer) {

    this.setState({vans: {designer }})
  }

  handleOnSubmit(e){

       e.preventDefault();
       const obj = this.state.vans
       console.log("el objeto que se envia", obj);
  }

  dimensionOnChange(dimension) {
         
    this.setState( {vans:{ dimension }} );
  }

  specificationsOnChange(specifications) {
         
    this.setState({vans :{ specifications }});
  }

  render() {
    const {extras} = this.state
    console.log('extrasss', extras)
    return (
      <Container>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Row className="justify-content">
            <Col md={6}>
              <DesignerVan  onInputChange={(e) => this.designerOnChange(e)} />

              <DimensionVan  onInputChange={(e) => this.dimensionOnChange(e)} />
            </Col>

            <Col md={6}>
              <SpecificationsVan  onInputChange={(e) => this.specificationsOnChange(e)} />
              {}
            </Col>
          </Row>

          <Button variant="dark" style={{ width: "100%", margin: "50px auto" }} type="submit">
            Pedir presupuesto
          </Button>
        </Form>
      </Container>
    );
  }
}

export default QuoteCard