const mongoose = require('mongoose');

const loginSchema =mongoose.Schema(
    {
        accNumber: Number,
        required: (true, 'Enter Account Number')
    },
    {
        email: String,
        required: (true, 'Enter email')
    },
    {
        verified: Boolean
    }
);

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
