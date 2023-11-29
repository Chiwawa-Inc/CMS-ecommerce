import { Details } from "@mui/icons-material";
import React from "react";
import { Card } from "react-bootstrap";

export default function ColoredCards(props){
    const details = props.details
    return(
        <>
        <Card
          bg={details.color}
          key={details.color}
          text={details.color === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem', height: "250px", margin: "auto", paddingTop: "40px"}}
          className="mb-2"
        >
          {/* <Card.Header>{details.title}</Card.Header> */}
          <Card.Body>
            <Card.Title> {details.title} </Card.Title>
            <Card.Text>
              {details.des}
            </Card.Text>
          </Card.Body>
        </Card>
    </>
    )
}