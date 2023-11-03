import React from "react";
import { useState } from "react";

export default function Form(){
    const initialValues = {username: "", email: "", phonenumber: ""};
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState()
    


    const handleChange = (e) => {
        console.log(e.target)
        const{name, value} = e.target
        setFormValues({ ...formValues, [name]: value})
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
        if (!values.username){
            errors.username = "Username is required"
    
        }
        if (!values.email){
        errors.username = "email is required"

    }
    if (!values.phonenumber){
    errors.username = "Phone number is required"
    }
    return
}
    return(
        <div>
            <h1>Book Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                <label>Username</label>
                <input type="text" name = "username" placeholder= "Username" value = {formValues.username} onChange = {handleChange} ></input>
                </div>
                <div className="field">
                    <label>Email Address</label>
                    <input type = "email" name = "email" placeholder = "Email" value = {formValues.email} onChange = {handleChange} />
                </div>
                <div className="field">
                    <label>Phone Number</label>
                    <input type = "number" name = "phonenumber" placeholder = "Number" value = {formValues.phonenumber} onChange = {handleChange} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}