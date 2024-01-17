import React from "react";
import { Container } from "react-bootstrap";

export default function DiverseServices(props){
    const approach = props.approach
    const choose = props.choose
    return(
        <Container>
            <h2>{approach}</h2>
            <div>{choose}
            </div>
        </Container>
    )
}