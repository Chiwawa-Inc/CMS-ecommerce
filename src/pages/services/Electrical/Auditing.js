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
            title: "Assessment and Analysis",
            image: "",
            des: "We begin by conducting a thorough assessment of your electrical systems, analyzing energy consumption, and identifying areas of inefficiency."
            
        },
        {
            title: "Customized Solutions",
            image: "",
            des: " Based on our findings, we develop tailored energy optimization strategies that address your specific needs and goals, ensuring maximum savings and minimal environmental impact."
            
        },
        {
            title: "Cutting-Edge Technology",
            image: "",
            des: " Leveraging the latest in electronics and information technology, we deploy advanced monitoring and control systems to streamline energy usage and monitor real-time performance."
            
        },
        {
            title: "Cost Reduction",
            image: "",
            des: " Our primary aim is to help you reduce operational costs by optimizing energy consumption, thereby enhancing your bottom line."
        },
        {
            title: "Sustainability:",
            image: "",
            des: "We are passionate about sustainability and will work with you to integrate eco-friendly practices into your operations, reducing your carbon footprint and contributing to a greener future."
        }

    ]

    const whyChoose = [
        {
            title: "Expertise",
            des: "Our team brings a wealth of experience and expertise in electrical systems and energy management, ensuring you receive the highest level of service.",
            color: "primary"
        },
        {
            title: "Custom Solutions",
            des: "We understand that every business is unique. Our solutions are customized to align with your specific requirements and objectives",
            color: "secondary"
        },
        {
            title: "Innnovation",
            des: " We are at the forefront of technology trends, incorporating the latest innovation to optimize energy efficiency.",
            color: "warning"
        },
        {
            title: "Cost Savings",
            des: " Our services are designed to deliver tangible cost savings, improving your company's financial health.",
            color: "danger"
        },
        {
            title: "Sustainabililty",
            des: "We share your commitment to environmental responsibility, and our solutions reflect this dedication.",
            color: "dark"
        }
    ]
    
    const head = "Electrical Energy Auditing Services"
    const description = "At Automatica Technologies Pvt. Ltd. (Nepal), we are dedicated to providing comprehensive Electrical Energy Audit Services that empower businesses to optimize their energy consumption, reduce costs, and enhance sustainability. With a deep-rooted commitment to excellence in electrical, electronics, and information technology services, we are your trusted partner in navigating the complex landscape of energy efficiency."

    const a = "Our Approach"
    const b = "At the heart of our Electrical Energy Audit Services is a meticulous and holistic approach that focuses on understanding your unique energy needs and consumption patterns. Our team of experienced engineers and experts will work closely with you to:"
    
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

// export default function DetailPage(){
//     return(
//         <div>fbvkjf</div>
//     )
// }