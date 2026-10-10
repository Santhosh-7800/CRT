import React, { useState } from 'react';
function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        message: "",
    });
    const handleChange=(e)=>{
        const { name, value }=e.target;
        setFormData((prevData)=>({
            ...prevData,[name]: value,
        }));
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Form Submitted", formData);
    };
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name :</label>
                <input type='text' name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} /><br /><br />
                <label htmlFor="age">Age :</label>
                <input type='text' name='age' placeholder='Enter your age' value={formData.age} onChange={handleChange} /><br /><br />
                <label htmlFor="message">Message :</label>
                <textarea name='message' placeholder='Enter your message' value={formData.message} onChange={handleChange} /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default ContactForm;