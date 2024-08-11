import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Row, Container} from "react-bootstrap";
import electrical_service from '../../../assets/electrical_service.avif';
import "./cardgrid.css";

function Grid({details}) {
    return (
    <>
      <Card className = "hover-card" style = {{height: "200px", width: "300px", margin: "auto", color:"white"}}>
        <Card.Img variant="top" src={electrical_service} />
        <Card.ImgOverlay className = "hover-card-text">
        <Card.Title>{details.title}</Card.Title>
        <Card.Text>
          {details.des}
        </Card.Text>
        </Card.ImgOverlay>
      </Card>
      </>

    );
  }
  
  export default Grid;
//   export default TextExample;

