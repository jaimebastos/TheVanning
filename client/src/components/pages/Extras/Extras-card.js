import { Card, Col, Button } from "react-bootstrap";
import './Extras.css'

const ExtrasCard = ({name, description, price, _id, category, displayModal, saveID, showEditModal, image, caption}) => {

  
  return (
    <Col md={4}>
      <Card className="extrasCard">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="card-name">{name}</Card.Title>
          <Card.Title className="card-info">{caption}</Card.Title>
          <Card.Title className="card-info">{price} €</Card.Title>
          <Button
            onClick={() => {
              showEditModal(false);
              displayModal(true);
              saveID(_id);
            }}
            size="sm"
            className="btn btn-outline-dark boton"
            style={{ marginBottom: "20px" }}
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
            style={{ marginBottom: "20px" }}
          >
            Editar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExtrasCard;

// const VanCard = ({ name, caption, image, price, _id }) => {
//     return (
//         <Col md={4}>
//             <Card className="van-card">
//                     <Card.Img variant="top" src={image} />
//                 <Card.Body>
//                     <Card.Title className="card-name">{name}</Card.Title>
//                     <Card.Title className="card-info">{caption}</Card.Title>
//                     <Card.Title className="card-info">{price} €</Card.Title>
//                     <Link to={`/vans/details/${_id}`} className="btn btn-outline-dark boton" >Detalles</Link>
//                     <Link to={`/vans/edit/${_id}`} className="btn btn-outline-dark boton"> Editar</Link>
//                 </Card.Body>
//             </Card>
//         </Col>
//     )
// }
// export default VanCard