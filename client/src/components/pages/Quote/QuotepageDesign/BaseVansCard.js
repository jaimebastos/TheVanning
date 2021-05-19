import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BaseVans.css";

const BaseVanCard = ({ name, caption, image, price, _id }) => {
  return (
      <Card className="van-card">
        <Card.Img variant="top" src={image[0]} />

        <Card.Body>
          <Card.Title className="card-name">{name}</Card.Title>
          <Card.Title className="card-info">{caption}</Card.Title>
          <Card.Title className="card-info">{price} €</Card.Title>
          <Link to={`/vans/details/${_id}`} className="btn btn-outline-dark boton">
            Detalles
          </Link>
          <Link to={`/vans/edit/${_id}`} className="btn btn-outline-dark boton">
            {" "}
            Editar
          </Link>
        </Card.Body>
      </Card>
  );
};

export default BaseVanCard;
