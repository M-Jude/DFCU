var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema(
    {
        accNumber: {
            type: String,
            unique: true,
            required: (true, 'Enter Account Number')
        },
        email:{
            type: String,
            lowercase: true,
            trim: true,
            required: (true, 'Enter Email')
        },
        h_password:{
            type: String,
            required:(true, 'Enter Password')
        }
    },
    {
        timestamps: true
    }
)

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.h_password);
  };

const User = mongoose.model('User', UserSchema);

module.exports = User;