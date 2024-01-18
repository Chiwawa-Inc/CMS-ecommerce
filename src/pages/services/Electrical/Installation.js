import React from "react";
import Mep from "../components/titleBodyComponent";
import DiverseServices from "../components/diverseServices";
import { Container } from "react-bootstrap";
import Card from "../components/cardgrid";
import { Col, Row} from "react-bootstrap";
import ColoredCards from "../components/coloredCards";
import Redefine from "../components/redefine";

export default function DetailPage(){
    const serviceType = [
        {
            title: "Compr4ehensive Inspection",
            image: "",
            des: "Our skilled technicians conduct in-depth assessments of your electrical installations, scrutinizing every component to ensure compliance with safety codes and regulations."
            
        },
        {
            title: "Testing and Certification",
            image: "",
            des: " Based on our findings, we develop tailored energy optimization strategies that address your specific needs and goals, ensuring maximum savings and minimal environmental impact."
            
        },
        {
            title: "Fault Detection",
            image: "",
            des: "We identify and recitify potential faults and weakness in your electrical systems, preventing costly downtime and safety hazards."
            
        },
        {
            title: "Customized Solutions",
            image: "",
            des: "We understand that each project is unique. Our solutions are tailored to suit your specific requirements, ensuring that you receive the most effective and efficient testing services."
        },

    ]

    const whyChoose = [
        {
            title: "Expertise",
            des: "Our team consists of highly trained and experienced professionals with a deep understanding of electrical systems and regulations, ensuring the highest level of service.",
            color: "primary"
        },
        {
            title: "Safety First",
            des: " We prioritize safety above all else. Our testing services are designed to identify and eliminate potential risks, protecting your property and personnel.",
            color: "secondary"
        },
        {
            title: "Compliance",
            des: " We are well-versed in local and international electrical codes and standards, guaranteeing that your installations meet all necessary requirements.",
            color: "warning"
        },
        {
            title: "Minimized Downtime",
            des: "Pur efficient testing processes are designed to minimize disuptions to your operations, allowing your business to run smoothly.",
            color: "danger"
        },
        {
            title: "Peace of Mind",
            des: "With our thorough testing testing and certification, you can have peace of mind knowing that your electrical installation are safe, reliable, and up to code.",
            color: "dark"
        }
    ]
    
    const head = "Electrical Installation Testing Services"
    const description = "At Automatica Technologies Pvt. Ltd. (Nepal), we take pride in offering top-tier Electrical Installation Testing Services that guarantee the safety, efficiency, and reliability of your electrical systems. With a profound commitment to excellence in electrical, electronics, and information technology services, we are your trusted partner in ensuring that your electrical installations meet and exceed industry standards."

    const a = "Our Approach"
    const b = "Our Electrical Installation Testing Services are built on a foundation of precision, thoroughness, and a dedication to safeguarding both people and property. We employ a meticulous approach that includes."
    
    return(
       <Container style = {{textAlign: "center"}}>
        <Mep heading = {head} description = {description}/>
        <DiverseServices approach = {a} choose = {b}/>
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
