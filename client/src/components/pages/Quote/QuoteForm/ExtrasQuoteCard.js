
import { Card, Form } from "react-bootstrap";


const ExtrasQuoteCard = ({ name, caption, price, id, handleChange}) => {

  return (
    <Card className="baseVan-card">
      <Card.Body>
        <Card.Title className="card-name">{name}</Card.Title>
        <Card.Title className="card-info">{caption}</Card.Title>
        <Card.Title className="card-info">{price} €</Card.Title>
        <Form.Check onChange={(e, elm) => handleChange(e, elm)} type="checkbox" value={id} label={name} />;
      </Card.Body>
    </Card>
  );
};

export default ExtrasQuoteCard;
