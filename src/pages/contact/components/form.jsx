import React from "react";
import { useState, useEffect} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'


export default function Inquiry(){
    const initialValues = {username: "", email: "", phonenumber: ""};
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        console.log(e.target)
        const{name, value} = e.target
        setFormValues({ ...formValues, [name]: value})
        console.log(formValues)
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
        
        <div>
            <h1>Book Appointment</h1>
            <Form inline onSubmit={handleSubmit}>
                <div className="field">
                <label>Username</label>
                <Form.Control placeholder = "username" aria-label = "username" aria-describedby = "basic-addon1"  value = {formValues.username} onChange = {handleChange}></Form.Control>
                {/* <input type="text" name = "username" placeholder= "Username" value = {formValues.username} onChange = {handleChange} ></input> */}
                </div>
                <p>{formErrors.username}</p>
                <div className="field">
                    <label>Email Address</label>
                    <Form.Control placeholder = "email" aria-label = "emiail" aria-describedby = "basic-addon1"  value = {formValues.email} onChange = {handleChange}></Form.Control>
                    {/* <input type = "email" name = "email" placeholder = "Email" value = {formValues.email} onChange = {handleChange} /> */}
                </div>
                <p>{formErrors.email}</p>

                <div className="field">
                    <label>Phone Number</label>
                    <Form.Control placeholder = "phonenumber" aria-label = "phonenumber" aria-describedby = "basic-addon1"  value = {formValues.phonenumber} onChange = {handleChange}></Form.Control>
                    {/* <input type = "string" name = "phonenumber" placeholder = "Number" value = {formValues.phonenumber} onChange = {handleChange} /> */}
                </div>
                <p>{formErrors.phonenumber}</p>

                <Button type = "submit">Submit</Button>
            </Form>
        </div>
     
    )
}