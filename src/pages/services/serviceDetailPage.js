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
            des: " From system design and installation to testing, maintenance, and energy audits, we cover the entire electrical spectrum. Our electrical solutions ensure uninterrupted power supply, enhanced safety, and optimal energy utilization."
            
        },
        {
            title: "Mechanical Services",
            image: "",
            des: "Our mechanical expertise extends to HVAC systems, ventilation, and climate control. We design, install, and maintain efficient systems that create comfortable environments while reducing energy consumption."
            
        },
        {
            title: "Plumbing Service",
            image: "",
            des: " Our plumbing services include design, installation, and maintenance of plumbing systems that prioritize water conservation and safety. We ensure efficient water distribution and drainage solutions."
            
        },
        {
            title: "Technology Integration",
            image: "",
            des: " We seamlessly integrate state-of-the-art electronics and information technology into your MEP systems, enabling smart automation, monitoring, and control for enhanced efficiency and convenience."
        },
        {
            title: "Energy Efficiency",
            image: "",
            des: "Sustainability is at the core of our services. We offer energy-efficient solutions, renewable energy integration, and green building practices to reduce your carbon footprint and operating costs."
        }

    ]

    const whyChoose = [
        {
            title: "Expertise",
            des: "Our team comprises highly skilled engineers, technicians, and specialists who bring years of experience to every project, ensuring the highest level of service and innovation.",
            color: "primary"
        },
        {
            title: "Customization",
            des: " We recognize that each project is unique. Our solutions are tailor-made to meet your specific needs and objectives, delivering optimal results.",
            color: "secondary"
        },
        {
            title: "Sustainability Focus",
            des: " We share your commitment to sustainability. Our services are designed to align with environmental best practices, promoting a greener future.",
            color: "warning"
        },
        {
            title: "Efficiency and Reliability",
            des: "We prioritize the efficiency and reliability of your MEP systems, guaranteeing uninterrupted operations and long-term cost savings.",
            color: "danger"
        },
        {
            title: "Cutting-Edge Technology",
            des: "We embrace the latest advancements in electronics and information technology to provide you with smart, future-ready solutions.",
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