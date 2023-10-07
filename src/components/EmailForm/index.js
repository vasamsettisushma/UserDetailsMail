import React, {useState} from "react" 
import emailjs from "@emailjs/browser";

const EmailForm = () => {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [message, setMessage] = useState(""); 

    const handlesubmit = (e) => {
        e.preventDefault();  

        const serviceId = "service_drr1syr"; 
        const templateId = "template_oq5mz8q"; 
        const publickey = "u02hf05xfe-Iq-d_N"; 

        const templateParams = {
            from_name :name, 
            from_email: email, 
            to_name: "sushma", 
            messagee : message, 
        }; 


        emailjs.send(serviceId, templateId, templateParams, publickey)
        .then((response) => {
            console.log("Email sent ", response);  
            setName(""); 
            setEmail(""); 
            setMessage("");
        })
        .catch((error) => {
            console.log("Erroe sending:" , error);

        }); 
    }
    return (
        <form onSubmit = {handlesubmit} className = "emailForm">
            <input type = "text" placeholder = "Your Name"
            value = {name} onChange = {(e) => setName(e.target.value)} /> 


            <input type = "email" placeholder = "Your Email" 
            value = {email} onChange ={(e) => setEmail(e.target.value)}/> 


            <textarea cols = "30" rows = "10" value = {message}
            onChange = {(e) => setMessage(e.target.value)} >

            </textarea>

            <button type = "submit">Send Email</button>
        </form>
    )
}


export default EmailForm

