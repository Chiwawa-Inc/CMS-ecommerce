import React from "react";
import Mep from "./components/title";
import DiverseServices from "./components/diverseServices";
import { Container } from "react-bootstrap";
import ImgOverlayExample from "./components/card";

export default function ServiceDetailPage(){
    return(
        <Container>
        <Mep/>
        <DiverseServices/>
        <ImgOverlayExample/>
        </Container>
    )
}