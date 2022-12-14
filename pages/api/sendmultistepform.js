export default function (req, res) {
    // require('dotenv').config()
    console.log(req.body.name)
    let nodemailer = require('nodemailer')
  
    // step-1 
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'gillanix007@gmail.com',
        pass: 'vcvmmeihnjiskyqt',
      },
      secure: true,
    })
  
    // step-2
    const mailData = {
      from: 'gillanix007@gmail.com',
      to: 'zunairgillani54@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
    }
  
    // step-3
    transporter.sendMail(mailData, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }