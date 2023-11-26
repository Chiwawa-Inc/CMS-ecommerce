import React from "react";
import Mep from "./components/title";
import DiverseServices from "./components/diverseServices";
import { Container } from "react-bootstrap";
import Card from "./components/cardgrid";
import { Col, Row} from "react-bootstrap";
import ColoredCards from "./components/coloredCards";
import Redefine from "./components/redefine";

export default function ServiceDetailPage(){
    const serviceType = [
        {
            title: "Electrical Services",
            image: "",
            des: "bjsdjjj"
        },
        {
            title: "Electrical Services",
            image: "",
            des: "djvsjbv"
        },
        {
            title: "Electrical Services",
            image: "",
            des: "sdvbksdv"
        },
        {
            title: "Electrical Services",
            image: "",
            des: " svnfs"
        },
        {
            title: "Electrical Services",
            image: "",
            des: "nvd"
        }

    ]

    const whyChoose = [
        {
            title: "bjhbv",
            des: "jbcsdjb",
            color: "primary"
        },
        {
            title: "bjhbv",
            des: "jbcsdjb",
            color: "secondary"
        },
        {
            title: "bjhbv",
            des: "jbcsdjb",
            color: "warning"
        },
        {
            title: "bjhbv",
            des: "jbcsdjb",
            color: "danger"
        },
        {
            title: "bjhbv",
            des: "jbcsdjb",
            color: "dark"
        }
    ]
    return(
       <Container style = {{textAlign: "center"}}>
        <Mep/>
        <DiverseServices/>
        <Row xs={1} md={3} className="g-4">
        
        {serviceType.map((element) =>(
            <Col>
            <Card details = {element}/>
            </Col>
        ))}
        </Row>

        <br/>
        <h2>Why Choose Us</h2>
        <br/>
        <Row xs={1} md={3} className="g-4">
        
        {whyChoose.map((element) =>(
            <Col>
            <ColoredCards details = {element}/>
            </Col>
        ))}
        </Row>
        <Redefine/>
        </Container>
    )
}