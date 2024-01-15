import React from 'react';
import { Accordion, Card, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import grey_background from '../../../assets/grey_background.png'


const ServicesAccordion = ({props}) => {

    return (
        <>
        <Card className="bg-dark text-white" style = {{ width: "50%", margin: "3em auto",}}>
        <Accordion >
            <Accordion.Item style={{ border: "0px"}}>
            <Accordion.Header >
            <Card.Body className="bg-dark text-white" style={{height: "10em", overflow: "hidden", padding:0}}>
            <Card.Img src={grey_background} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
            </Card.ImgOverlay>
            </Card.Body>
            </Accordion.Header>
            <Card.Footer style={{padding:0}}>
                <Accordion.Body style={{padding:0}}>
                <ListGroup>
                    {props.subServices.map((subService, index) => (
                        <ListGroup.Item key={index}>
                            <Link to={subService.link}>
                                {subService.title}
                            </Link>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                </Accordion.Body>
            </Card.Footer>
            </Accordion.Item>
        </Accordion>
        </Card>
        </>
    );
};

export default ServicesAccordion;
