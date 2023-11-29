import React from "react";
import { useState, useEffect} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Inquiry(){
    const initialValues = {username: "", email: "", phonenumber: ""};
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
             <div className="Header" style = {{paddingTop: "60px", paddingLeft: "70px"}}>
                <h1>Book Appointment</h1>
            </div>

            <div className="form" style = {{paddingLeft:"70px", paddingTop: "20px"}} >
            <Form inline onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control style = {{width: "40%"}} name = "username" 
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
                    <Form.Control style = {{width: "40%"}} 
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
                    <Form.Control style = {{width: "40%"}} 
                        name = "phonenumber"
                        placeholder = "Phonenumber" 
                        aria-label = "phonenumber" 
                        aria-describedby = "basic-addon1"  
                        value = {formValues.phonenumber} 
                        onChange = {handleChange}>
                    </Form.Control>
                <p>{formErrors.phonenumber}</p>
                </Form.Group>

                <Button type = "submit">Submit</Button>
            </Form>
            </div>
        </>
     
    )
}