import React from "react";
import { Col, Row, Container} from "react-bootstrap";


export default function About(){
    return(
        <div className="" style = {{margin: "5em 0"}}>
            <h1 className="text-center">About Us</h1>
            <Row style = {{ margin: "4em"}}>
            <Col>
            <div className= "text-center" style ={{textAlign: "left"}}>We are committed to deliver products and services with automation at its core. Remember us for any kind of Electrical, Electronics and Computer solutions. 
            Automation, Electrical, Electronics, CNC, Softwares, Mechanical, Manufacturing, Process Automation, Industrial Automation, Web Based Services, Machinery, Electrical Supplies, Electronics Supplies, IOT Solutions, IOT Products, PLC based system, System Design, Consultation, AMC, Technical assistance, and Artificial Intelligence
            </div>
            </Col>
            <Col>
                <img src = "https://miro.medium.com/v2/resize:fit:1400/0*TVvcb08UBLeL919-.jpeg " alt = "Col" style = {{width: "600px", height: "300px"}}></img>
            </Col>
            </Row>
        </div>
    )
}