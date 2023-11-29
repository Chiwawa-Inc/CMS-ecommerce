import React from "react";
import { Col, Row, Container} from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../../../assets/logo.png'


export default function Contact(){
    return(
        <>
        <div className="" style = {{ backgroundColor: "#252b42", lineHeight: "4em", color: "white"}}>
            <Container style={{}}>
            {/* bootstrap*/}
            <Row style = {{paddingTop: "30px", paddingBottom: "30px"}}> 
                <Col style = {{textAlign: "left"}}>
                    <div className="" style = {{fontSize: "25px", fontFamily: "Inter"}}>
                        <img src = {logo} alt = "logo"  width="40" height="40" style ={{marginRight: "1rem"}}></img>
                        Automatica Technologies<br></br>
                        Where engineering is Passion!!
                    </div>
                   
                </Col>
                <Col style = {{textAlign: "left"}}>
                    <div style= {{fontSize: "24px"}}>{' '}Contact Us</div>
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
                <Col md = {3} style = {{textAlign: "left"}}>
                    <div style= {{fontSize: "24px"}}>Follow Us</div>
                    <div className="text-primary" style ={{color: "white"}}><InstagramIcon/></div>
                    <div className="text-primary"><LinkedInIcon/></div>
                    <div className="text-primary"><FacebookIcon/></div>
                </Col>
            </Row>
            </Container>
            <div style ={{ backgroundColor:"#182130"}}>
            <Container>
            <Row >
                <div style ={{textAlign: "center", fontSize: "18px", paddingTop: "5px", }}>© 2023 Automatica Technologies</div>
            </Row>
            </Container>
            </div>
        </div>
        </>
    )
}