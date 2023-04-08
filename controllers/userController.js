const mongoose = require('mongoose');
const  jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');

exports.register = function(req, res) {
    var newUser = new User(req.body);
    newUser.h_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save().then(function(err, user) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        user.h_password = undefined;
        return res.json(user);
      }
    });
  };

exports.sign_in = async function(req, res) {
   await User.findOne({
      accNumber: req.body.accNumber
    }).then( function(err, user) {
        try {
            if (err) return res.status(400).send(err);
            if (!user || !user.comparePassword(req.body.password)) {
                return res.status(401).json({ message: 'Authentication failed. Invalid account number or password.' });
            }
            // return res.json({ token: jwt.sign({ accNumber: user.accNumber, email: user.email, _id: user._id }, 'DFCU') });
            const token = jwt.sign({ accNumber: user.accNumber, email: user.email, _id: user._id }, process.env.TOKEN_KEY);
            res.header("auth-token", token).send(token);
        } catch (error) {
            throw error;
        }
      
    });
};
  
  exports.loginRequired = function(req, res, next) {
    if (req.user) {
      next();
    } else {
  
      return res.status(401).json({ message: 'Unauthorized user!!' });
    }
  };

//   exports.profile = function(req, res, next) {
//     if (req.user) {
//       res.send(req.user);
//       next();
//     } 
//     else {
//      return res.status(401).json({ message: 'Invalid token' });
//     }
//   };