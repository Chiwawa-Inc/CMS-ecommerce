import React from "react";
import Mep from "../components/title";
import DiverseServices from "../components/diverseServices";
import { Container } from "react-bootstrap";
import Card from "../components/cardgrid";
import { Col, Row} from "react-bootstrap";
import ColoredCards from "../components/coloredCards";
import Redefine from "../components/redefine";

export default function DetailPage(){
    const serviceType = [
        {
            title: "Enhance Safety",
            image: "",
            des: " Our retrofitting services prioritize safety by upgrading outdated protective devices, minimizing the risk of electrical faults, and ensuring personnel and equipment remain protected."
            
        },
        {
            title: "Improve Reliability",
            image: "",
            des: "We optimize protection coordination, ensuring that protective devices respond accurately and swiftly to faults, minimizing downtime and equipment damage."
            
        },
        {
            title: "Adopt Advanced Technology",
            image: "",
            des: " Our retrofitting services leverage the latest advancements in electronics and information technology, introducing smart automation and control for real-time monitoring and enhanced protection."
            
        },
        {
            title: "Compliance and Efficiency",
            image: "",
            des: "We ensure your protection systems are in full compliance with industry standards and regulations, enhancing the overall efficiency of your electrical infrastructure."
        },

    ]

    const whyChoose = [
        {
            title: "Expertise",
            des: " Our team comprises highly skilled engineers and technicians with specialized knowledge in protection systems, guaranteeing the highest level of service and innovation.",
            color: "primary"
        },
        {
            title: "Safety Focus",
            des: " We prioritize safety above all else. Our retrofitting services are designed to minimize electrical risks and potential hazards.",
            color: "secondary"
        },
        {
            title: "Compliance Assurance",
            des: " We are well-versed in local and international electrical codes and standards, ensuring that your retrofitting projects meet all necessary requirements.",
            color: "warning"
        },
        {
            title: "Cost-Effective Solutions",
            des: " Our services are designed to prevent costly downtime and equipment damage, saving you money in the long run.",
            color: "danger"
        },
        {
            title: "Future-Ready Systems",
            des: " We introduce modern technology and automation to your protection systems, ensuring they remain adaptable and relevant for years to come.",
            color: "dark"
        }
    ]

    const head = "Electrical Protection Retrofitting Services"
    const description = "Welcome to Automatica Technologies Pvt. Ltd. (Nepal), your premier partner in Electrical Protection Retrofitting Services. We understand the critical importance of safeguarding your electrical infrastructure while ensuring its reliability and efficiency. With a steadfast commitment to excellence in electrical, electronics, and information technology services, we offer you the expertise needed to modernize and fortify your protection systems."

    const a = "The Power of Electrical Protection Retrofitting"
    const b = "Electrical Protection Retrofitting is the strategic process of upgrading, enhancing, and modernizing protective systems within your electrical infrastructure. At Automatica Technologies Pvt. Ltd. (Nepal), we offer a comprehensive range of retrofitting solutions designed to:"
    
    return(
       <Container style = {{textAlign: "center"}}>
        <Mep heading = {head} description = {description}/>
        <DiverseServices approach = {a} choose = {b}/>
        <Row xs={1} md={2} className="g-4">
        
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



