require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Status = require('./models/loanModel');
const User = require('./models/loginModel');
const otpCode = require('./models/OTPVerification')

const app = express();
app.use(express.json()); 

app.get('/', (req, res)=>{
    res.send('API call test');
})

app.get('/loan_status/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const LoanStatus = await Status.find({CId: id})
        res.status(200).json(LoanStatus);
    } catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/loan_details', async(req, res)=>{
    try {
        const LoanDetails = await Status.create(req.body);
        res.status(200).json(LoanDetails);
    } catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.connect(process.env.DATABASE_URI)    
.then(()=>{
    console.log('Database connection Successful!');
    app.listen(8088, ()=>{
        console.log('Loan Status API => Started Successfully')
    })
}).catch((error)=>{
    console.log(error)
})