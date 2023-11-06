import React from "react";
import Inquiry from "./components/form"
import {Container} from "react-bootstrap"

export default function Contact() {
    return(
    <div style = {{backgroundImage: "linear-gradient(90deg, rgba(27, 69, 69, 1) 3%, rgba(0, 188, 212, 1) 100%, rgba(238, 130, 238, 1) 100%)", height: "88.5vh"}}>
        <Container >
        <Inquiry/>
        </Container>
    </div>
    )
}
