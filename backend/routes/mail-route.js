const express = require('express')
const route=express.Router()
const nodemailer = require("nodemailer");
var validator = require("node-email-validation");
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

route.post('/',async(req,res,next)=>{
    const {name,email,message}=req.body;
    if(!name || !email || !message || name.length===0 || email.length===0 || message.length===0)
    {
        const error = new Error('All data not found!!!')
        error.code=422
        return next(error)
    }
    let info;
    if(!validator.is_email_valid(email)){
        const error = new Error('Could not find email ID. Kindly check and retry');
        error.code=510
        return next(error)
    }
    try{
        info = await transporter.sendMail({
            from: "jiyamanipriya@gmail.com", // sender address
            to: `${email}, jiyamanipriya@gmail.com`, // list of receivers
            subject: "Manideepa Shaw Portfolio", // Subject line
            text: message, // plain text body
            html: `<b>${message}</b>`, // html body
          });
    }
    catch(err)
    {
        const error = new Error('Could not find email ID. Kindly check and retry');
        error.code=510
        return next(error)
    }
    
    // console.log("Message sent: %s", info.messageId);
    res.status(200).json({"data":{name,email,message}})
})

module.exports = route;