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
      </Card.Body>
    </Card>
  );
};

export default BaseVanCard;
