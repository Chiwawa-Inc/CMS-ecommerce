import React from "react";
import { useState, useEffect} from "react";

export default function Form(){
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
            <form onSubmit={handleSubmit}>
                <div className="field">
                <label>Username</label>
                <input type="text" name = "username" placeholder= "Username" value = {formValues.username} onChange = {handleChange} ></input>
                </div>
                <p>{formErrors.username}</p>
                <div className="field">
                    <label>Email Address</label>
                    <input type = "email" name = "email" placeholder = "Email" value = {formValues.email} onChange = {handleChange} />
                </div>
                <p>{formErrors.email}</p>

                <div className="field">
                    <label>Phone Number</label>
                    <input type = "string" name = "phonenumber" placeholder = "Number" value = {formValues.phonenumber} onChange = {handleChange} />
                </div>
                <p>{formErrors.phonenumber}</p>

                <button>Submit</button>
            </form>
        </div>
    )
}