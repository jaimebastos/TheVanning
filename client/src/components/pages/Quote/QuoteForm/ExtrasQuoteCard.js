import { Card, Col, Form, Row } from "react-bootstrap";
import './QuoteExtrasCard.css'

const ExtrasQuoteCard = ({ data, handleChange }) => {
  console.log(data)
  return (
    
    <Row className="cardSize">
      <Card className="extras-quote-card">
      <Col xs={6}>
        <Card.Img className="extras-quote-img" variant="top" src={data.image} />
      </Col> 
      <Col xs={6}>
        <Card.Body>
          <Card.Title className="card-information-name">{data.name}</Card.Title>
          <Card.Title className="card-information">{data.caption}</Card.Title>
          <Card.Title className="card-information">{data.price} €</Card.Title>
          <Form.Check onChange={(e) => handleChange(e, data)} type="checkbox" /> Añadir
        </Card.Body>
      </Col>
      </Card>
    </Row>
  );
};

export default ExtrasQuoteCard;
