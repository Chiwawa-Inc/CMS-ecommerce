import React from "react";
import { Col, Row, Container} from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
// import logo from '../assets/logo.png'


export default function Contact(){
    return(
        <>
        <div className="" style = {{marginTop: "10vh", backgroundColor: "#252b42", lineHeight: "4em", paddingTop: "60px", color: "white"}}>
            <Container style={{}}>
            {/* bootstrap*/}
            <Row  className="text-center" style = {{marginLeft: "10px"}}> 
                <Col style = {{textAlign: "left"}}>
                    <div className="" style = {{fontSize: "30px", fontFamily: "Inter"}}>
                        {/* <img src = {logo}></img> */}
                        <h1>Automatica Technologies</h1>
                    </div>
                   
                </Col>
                <Col style = {{textAlign: "left"}}>
                    <div style= {{fontSize: "24px"}}>Contact Us</div>
                    <div className="" style = {{fontSize: "20px"}}> 
                        <FmdGoodIcon/> Dhapasi, Kathmandu
                    </div>
                    <div className="" style = {{fontSize: "20px"}}> 
                        <CallIcon/> Phone: 9841891831
                    </div>
                    <div className="" style = {{fontSize: "20px"}}> 
                        <EmailIcon/> sales.automatica@gmail.com
                    </div>
                </Col>
                <Col >
                    <div style= {{fontSize: "24px"}}>Follow Us</div>
                    <div className="text-primary" style ={{color: "white"}}><InstagramIcon/></div>
                    <div className="text-primary"><LinkedInIcon/></div>
                    <div className="text-primary"><FacebookIcon/></div>
                </Col>
            </Row>
            </Container>
            <div style ={{ backgroundColor:"#182130"}}>
            <Row >
                <div style ={{textAlign: "center", fontSize: "18px", paddingTop: "10px", }}><p>© 2023 Automatica Technologies</p></div>
            </Row>
            </div>
        </div>
        </>
    )
}