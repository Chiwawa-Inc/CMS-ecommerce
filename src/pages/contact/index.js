import React from "react";
import Inquiry from "./components/form"
import {Container} from "react-bootstrap"

export default function Contact() {
    return(
    // <div style = {{backgroundImage: "linear-gradient(90deg, rgba(27, 69, 69, 1) 3%, rgba(0, 188, 212, 1) 100%, rgba(238, 130, 238, 1) 100%)", height: "88.5vh"}}>
    <div style = {{backgroundImage: "radial-gradient(800px 700px  at 25% 35%, rgba(0,187,211,1) 0%, rgb(56, 145, 145)30%, rgb(36, 93, 93) 60%)", height: "100%"}}>
        <Container >
        <Inquiry/>
        </Container>
    </div>
    )
}
