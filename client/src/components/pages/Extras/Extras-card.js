import { Card, Col, Button } from "react-bootstrap";
import './Extras.css'

const ExtrasCard = ({name, description, price, _id, category, displayModal, saveID, showEditModal, image, caption}) => {

  
  return (
    <Col md={4}>
      <Card className="extrasCard">
        <Card.Img variant="top" src={image} />
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
            size="sm"
            className="btn btn-outline-dark boton"
            style={{ height: "40px", width: "35%", marginBottom: "20px" }}
            variant="outline-secondary"
          >
            Detalles
          </Button>

          <Button
            onClick={() => {
              showEditModal(true);
              displayModal(true);
              saveID(_id);
            }}
            className="btn btn-outline-dark boton"
            variant="outline-secondary"
            size="sm"
            style={{ height: "40px", width: "35%", marginBottom: "20px" }}
          >
            Editar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExtrasCard;

