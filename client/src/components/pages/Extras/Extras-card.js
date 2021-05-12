import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ExtrasCard = ({ name, description, price, _id, category, displayModal, saveID }) => {

  return (
    <Col md={4}>
      <Card className="extras-card">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>{description}</p>
          <p>{price}</p>
          <p>{category}</p>
          <Button onClick={() => (displayModal(true), saveID(_id))} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Detalles</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ExtrasCard