import React from "react";
import { useState, useEffect} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./form.css"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function Inquiry(){
    const initialValues = {username: "", email: "", phonenumber: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        console.log(e)
        const{name, value} = e.target
        setFormValues({ ...formValues, [name]: value})
        // console.log(formValues)
        setIsSubmit(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
    }

    useEffect(() =>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {}
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
        if (!values.username){
            errors.username = "Username is required"
    
        }
        if (!values.email){
        errors.email = "Email is required"

    }
    if (!values.phonenumber){
    errors.phonenumber = "Phone number is required"
    }
    return errors;

}
    return(
        <>
        <div className="main-container" style = {{maxWidth: "1000px", minHeight:"100vh", height: "100%", margin: "3rem auto", background: "grey"}}>
            <div className="left d-flex flex-column justify-content-between">
                <div className="top">
                <h1>Book an Appointment</h1>
                <p>Fill in the form below to book an appointment with us.</p>
                </div>

                <div className="bottom">
                <div style= {{fontSize: "20px"}}>{' '}Contact Us</div>
                    <div className="" style = {{fontSize: "18px"}}> 
                        <FmdGoodIcon/> Dhapasi, Kathmandu
                    </div>
                    <div className="" style = {{fontSize: "18px"}}> 
                        <CallIcon/> Phone: 9841891831
                    </div>
                    <div className="" style = {{fontSize: "18px"}}> 
                        <EmailIcon/> sales.automatica@gmail.com
                    </div>
                </div>
            </div>
            <div className="right">
            <div className="Header" style = {{paddingTop: "30px", paddingLeft: "70px", fontSize:"20px"}}>
                <h1>Contact Information</h1>
            </div>

            <div className="form" style = {{margin: "auto", paddingLeft:"70px"}} >
            <Form inline onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control style = {{width: "50%"}} name = "username" 
                    placeholder = "Username" 
                    aria-label = "username" 
                    aria-describedby = "basic-addon1"  
                    value = {formValues.username} 
                    onChange = {handleChange}>
                </Form.Control>
                <p>{formErrors.username}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control style = {{width: "50%"}} 
                        name = "email"
                        placeholder = "Email" 
                        aria-label = "email" 
                        aria-describedby = "basic-addon1" 
                        value = {formValues.email} 
                        onChange = {handleChange}>
                     </Form.Control>
                <p>{formErrors.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control style = {{width: "50%"}} 
                        name = "phonenumber"
                        placeholder = "Phonenumber" 
                        aria-label = "phonenumber" 
                        aria-describedby = "basic-addon1"  
                        value = {formValues.phonenumber} 
                        onChange = {handleChange}>
                    </Form.Control>
                <p>{formErrors.phonenumber}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>How can we help you?</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px', width: "70%" }}
                        name = "message"
                        value = {formValues.message} 
                        onChange = {handleChange}/>
                <p>{formErrors.phonenumber}</p>
                </Form.Group>

                <Button type = "submit">Submit</Button>
            </Form>
            </div>
            </div>
        </div>
        </>
     
    )
}