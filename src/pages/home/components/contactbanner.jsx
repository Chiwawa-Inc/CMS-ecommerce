import React from "react";
import { Col, Row, Container} from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact(){
    return(
        <>
        <div className="" style = {{marginTop: "10vh", backgroundColor: "black", "color":"white"}}>
            <Container>
            {/* bootstrap*/}<Row  className="text-center" > 
                <Col>
                    <div className="">Automatica technologies</div>
                    <div className="">Location</div>
                    <div className="">Phone number</div>
                    <div className="">Email Address</div>
                </Col>
                <Col>
                    <div className="text-primary"><InstagramIcon/></div>
                    <div className="text-primary"><LinkedInIcon/></div>
                    <div className="text-primary"><FacebookIcon/></div>
                </Col>
            </Row>
            </Container>
        </div>
        </>
    )
}