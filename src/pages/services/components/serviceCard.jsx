import React from "react";

import Card from 'react-bootstrap/Card';
import ServicesAccordion from "./servicesAccordion";
import { Link } from "react-router-dom";


function ServiceCard({props}) {

  const SimpleCard = ({props}) => (
    <Card className="bg-dark text-white" style = {{height: "10em", width: "50%", margin: "3em auto",  overflow: "hidden"}}>
      <Card.Img src={props.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
  
  return (
    props.subServices ? ServicesAccordion({props}) :
    <Link to={props.link}>
      <SimpleCard props={props}/>
    </Link>
  );
}

export default ServiceCard;