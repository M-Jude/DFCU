const mongoose = require('mongoose');

const loanSchema = mongoose.Schema(
    {
        CId: {
            type: Number,
            required: (true, 'Enter Customer ID')
        },
        LoanID:{
            type: String,
            unique: true,
            required: (true, 'Enter Loan ID')
        },
        DoDsbsnt:{
            type: Date,
            required:(true, 'Enter Disbursment Date')
        },
        OutsAmount:{
            type: Number,
            default: 0
        },
    },
    {
        timestamps: true
    }
)


const LoanStatus = mongoose.model('Status', loanSchema);

module.exports = LoanStatus;