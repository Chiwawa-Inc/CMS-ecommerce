import React from "react";
import { useState, useEffect} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./form.css"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { FloatingLabel } from "react-bootstrap";

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
        <div className="main-container" style = {{maxWidth: "1000px", margin: "3rem auto", background: "grey"}}>
            <div className="left d-flex flex-column justify-content-between p-5">
                <div className="top">
                <h1>Let's Get in Touch</h1>
                <p>Simply fill this form and We'll promptly get back to you</p>
                </div>

                <div className="bottom">
                <div style= {{fontSize: "20px"}}>{' '}Contact Us</div>
                    <div className="mt-2" style = {{fontSize: "16px"}}> 
                        <FmdGoodIcon/> Dhapasi, Kathmandu
                    </div>
                    <div className="mt-2" style = {{fontSize: "16px"}}> 
                        <CallIcon/> Phone: 9841891831
                    </div>
                    <div className="mt-2" style = {{fontSize: "16px"}}> 
                        <EmailIcon/> sales.automatica@gmail.com
                    </div>
                </div>
            </div>
            <div className="right p-5">
            {/* <div className="Header" style = {{fontSize:"20px"}}>
                <h1>Contact Information</h1>
            </div> */}

            <div className="form"  >
            <Form inline onSubmit={handleSubmit}>
            <FloatingLabel 
            className="mb-3" 
            controlId="formBasicEmail"
            label="Full Name"
            >
                
                <Form.Control name = "username" 
                    placeholder = "Username" 
                    aria-label = "username" 
                    aria-describedby = "basic-addon1"  
                    value = {formValues.username} 
                    onChange = {handleChange}>
                </Form.Control>
                <p>{formErrors.username}</p>
                </FloatingLabel>

                <FloatingLabel className="mb-3" controlId="formBasicEmail" label="Email Address">
                    
                    <Form.Control 
                        name = "email"
                        placeholder = "Email" 
                        aria-label = "email" 
                        aria-describedby = "basic-addon1" 
                        value = {formValues.email} 
                        onChange = {handleChange}>
                     </Form.Control>
                <p>{formErrors.email}</p>
                </FloatingLabel>

                <FloatingLabel
                    controlId="formBasicEmail"
                    label="Phone Number"
                    className="mb-3 font-size-20px"
                >
                    
                    <Form.Control 
                        name = "phonenumber"
                        placeholder = "Phonenumber" 
                        aria-label = "phonenumber" 
                        aria-describedby = "basic-addon1"  
                        value = {formValues.phonenumber} 
                        onChange = {handleChange}>
                    </Form.Control>
                <p>{formErrors.phonenumber}</p>
                </FloatingLabel>

                <FloatingLabel className="mb-3" controlId="formBasicEmail"
                    label="How can we help you?">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px'}}
                        name = "message"
                        value = {formValues.message} 
                        onChange = {handleChange}/>
                <p>{formErrors.phonenumber}</p>
                </FloatingLabel>

                <Button type = "submit" className="mt-4">Submit</Button>
            </Form>
            </div>
            </div>
        </div>
        </>
     
    )
}