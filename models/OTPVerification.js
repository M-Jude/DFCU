const mongoose = require('mongoose');

const otpSchema =mongoose.Schema(
    {
        accNumber: Number,
        required: (true, 'Enter Account Number')
    },
    {
        otp: String,
    },
    {
        createdAt: Date,
    },
    {
        expiresAt: Date,
    }
);

const otpCode = mongoose.model('otpCode', otpSchema);

module.exports = otpCode;
