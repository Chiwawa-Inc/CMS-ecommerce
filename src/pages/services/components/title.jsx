import React from "react";
import { Container } from "react-bootstrap";

export default function Title(props){
    const heading = props.heading
    const description = props.description
    return(
        <>
        <Container>
            <h1>{heading}</h1>
            <div>{description}
            </div>
        </Container>
        </>
    )
}