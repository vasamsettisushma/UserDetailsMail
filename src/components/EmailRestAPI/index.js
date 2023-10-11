import React, {useState} from "react" 
import axios from "axios"
const EmailRestAPI = () => {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [message, setMessage] = useState(""); 

    const handlesubmit = async(e) => {
        e.preventDefault();  

        const serviceId = "service_drr1syr"; 
        const templateId = "template_oq5mz8q"; 
        const publickey = "u02hf05xfe-Iq-d_N"; 

        const data = {
            service_id:serviceId, 
            template_id:templateId, 
            user_id: publickey, 
            template_params:{
                from_name:name,
                from_email:email, 
                to_name:"sushma", 
                messagee:message,
            }
        };
    

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data);
            console.log(res.data);
            setName("");
            setEmail(""); 
            setMessage("");

        }
        catch(error) {
            console.log(error);
        }
    }
    
    return (
        <div>
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
        </div>
    )

}


export default EmailRestAPI

