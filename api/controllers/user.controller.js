const Status = require('../models/loanModel');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = async (req, res) => {
  try {
    const {id} = req.params;
    const LoanStatus = await Status.find({
      CId: id,
      OutsAmount: {$gt:0}
    })
      res.status(200).json(LoanStatus);
  } catch (error) {
      // console.log(error.message);
      res.status(500).json({message: error.message})
  }
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
