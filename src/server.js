const express = require('express');
const nodemailer = require('nodemailer');

const hostname = "0.0.0.0";

const app = express();

// Configure Nodemailer with your email service provider's details
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'vsushma725@gmail.com',
    pass: 'emfm xhxt hokq zsek',
  },
});

app.use(express.json());

app.post('/send-email', (req, res) => {
  res.end("UserDetailsMail");
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'vsushma725@gmail.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
      alert("Email sent successfully");
    }
  });
});

app.listen(3000, hostname, () => {
  console.log('Server is running on port 3000');
});
