const express = require('express')
const mailRoute = require('./routes/mail-route')
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
dotenv.config();

const app = express()

const PORT = 8000

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// for cors operation
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',`${process.env.REQ}`) //any browser can send the request
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods','POST')
    next()
})

app.use("/api/mail",mailRoute)

// to handle all the not found page error, the routes that are not defined
app.use((req,res,next)=>{
    const error = new Error("Could not find this page!!!")
    error.code = 404
    return next(error)
})

// to handle all the errors
app.use((err,req,res,next)=>{
    // to check if the response has been sent to the header
    if(res.headerSent)
    {
        return next(err)
    }
    res.status(err.code || 500)
    res.json({message: err.message || "An unknown error occured"})
})

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
})