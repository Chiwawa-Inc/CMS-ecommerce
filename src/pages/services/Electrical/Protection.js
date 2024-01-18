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
            title: "Fault Identification",
            image: "",
            des: "Our expert engineers employ advanced diagnostic tools to identify potential faults in your electrical systems, preventing costly downtime and safety hazards. "
            
        },
        {
            title: "Relay Coordination",
            image: "",
            des: "Wr meticulously assess and fine-tune relay settings to ensure that protective device operate seamlessly in response to faults, minimizing the impact of disturbances."
            
        },
        {
            title: "Arc Flash Analysis",
            image: "",
            des: "Our specialized analysis quantifies the potential arc flash hazards within your system, allowing us to implemnet safeguards that protect personnel and equipment."
            
        },
        {
            title: "System Reliability",
            image: "",
            des: ": We evaluate the reliability of your protection systems, recommending improvements and upgrades to enhance the resilience of your electrical infrastructure."
        },
    ]

    const whyChoose = [
        {
            title: "Expertise",
            des: " Our team comprises seasoned professionals with extensive knowledge of protection systems and a keen eye for fault detection, ensuring the highest level of service.",
            color: "primary"
        },
        {
            title: "Safety Focus",
            des: "Safety is our top priority. Our analysis and recommendations are rooted in safeguarding both people and property.",
            color: "secondary"
        },
        {
            title: "Compliance Assurance",
            des: "We are well-versed in industry standards and regulations, ensuring that your protection systems meet all necessary requirements.",
            color: "warning"
        },
        {
            title: "Optimized Operations",
            des: " Our analysis is designed to minimize disruptions to your operations, enhancing the efficiency and reliability of your electrical infrastructure.",
            color: "danger"
        },
        {
            title: "Cost Saving",
            des: " By preventing costly downtime and equipment damage, our services help you save money in the long run.",
            color: "dark"
        }
    ]

    const head = "Protection System Analysis"
    const description = "Welcome to Automatica Technologies Pvt. Ltd. (Nepal), where we specialize in comprehensive Protection System Analysis services aimed at fortifying your electrical systems against faults, ensuring uninterrupted power supply, and safeguarding your critical assets. With a profound commitment to excellence in electrical, electronics, and information technology services, we are your trusted partner in optimizing the safety and reliability of your electrical infrastructure."

    const a = "The Power of Protection System Analysis"
    const b = "Protection System Analysis is a critical process that encompasses a range of techniques and technologies designed to detect, assess, and mitigate electrical faults and disturbances. At Automatica Technologies Pvt. Ltd. (Nepal), we offer a holistic approach to Protection System Analysis that includes."
    
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

