
import { Card, Form } from "react-bootstrap";


const ExtrasQuoteCard = ({ data, handleChange }) => {
  console.log(data)
  return (
    <Card className="baseVan-card">
      <Card.Body>
        <Card.Title className="card-name">{data.name}</Card.Title>
        <Card.Title className="card-info">{data.caption}</Card.Title>
        <Card.Title className="card-info">{data.price} €</Card.Title>
        <Form.Check onChange={(e) => handleChange(e, data)} type="checkbox" />;
      </Card.Body>
    </Card>
  );
};

export default ExtrasQuoteCard;
