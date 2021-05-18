import { Card, Col, Button } from "react-bootstrap";


const ExtrasCard = ({name, description, price, _id, category, displayModal, saveID, showEditModal}) => {

  
  return (
    <Col md={4}>
      <Card className="extras-card">
        <Card.Body>
          <Card.Title className="cardExtra-name">{name}</Card.Title>
          <Card.Title className="cardExtra-info">{caption}</Card.Title>
          <Card.Title className="cardExtra-info"> <strong>{price} €</strong></Card.Title>
          <Button
            onClick={() => {
              showEditModal(false);
              displayModal(true);
              saveID(_id);
            }}
            variant="dark"
            size="sm"
            style={{ marginBottom: "20px" }}
          >
            Detalles
          </Button>

          <Button
            onClick={() => {
              showEditModal(true);
              displayModal(true);
              saveID(_id);
            }}
            variant="dark"
            size="sm"
            style={{ marginBottom: "20px" }}
          >
            edit
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExtrasCard;
