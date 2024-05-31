import React from "react";
import Inquiry from "./components/form"
import {Container} from "react-bootstrap"

export default function Contact() {
    return(
    <div style = {{minHeight: "88.5vh"}}>
        <Container >
        <Inquiry/>
        </Container>
    </div>
    )
}
