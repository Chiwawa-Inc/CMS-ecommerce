import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Row, Container} from "react-bootstrap";

function Grid({details}) {
    return (
    <>
      <Card style = {{height: "200px", width: "300px", margin: "auto"}}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.ImgOverlay>
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

