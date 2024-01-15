import React from "react";

import Card from 'react-bootstrap/Card';
import ServicesAccordion from "./servicesAccordion";

function ServiceCard({details}) {
  return (
    <Card className="bg-dark text-white" style = {{height: "10em", width: "50%", margin: "3em auto",  overflow: "hidden"}}>
      <Card.Img src={details.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{details.title}</Card.Title>
        <Card.Text>
          {details.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ServiceCard;