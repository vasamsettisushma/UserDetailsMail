import React, { useState } from 'react';
import axios from 'axios';
import "./index.css"

function New() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    axios.post('/send-email', { to: email, subject, text: message })
      .then(response => {
        console.log('Email sent successfully');
        alert("Email-sent succesfully")
      })
      .catch(error => {
        console.error('Failed to send email');
      });
  };

  return (
    <div className="input-container">
      <input type="email" placeholder="Recipient's Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Send Email</button>
      <h1 className = "heading">After clicking the Send Email button wait for 10 seconds..</h1>
      <p className="blog-title">Mail me at "vsushma725@gmail.com"</p>
      <p>If you want to try sending the mails to anyone all you have to do is to provide their valid mail address in Recipient's Email</p>
    </div>
  );

  
}

export default New;
