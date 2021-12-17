const { Quiz } = require('../models');

const getRangeOfQuizzes = async (req, res) => {
  console.log(
    `starting from ${req.query.startingPoint} with a range of ${req.query.range}`
  );
  res.send(
    `starting from ${req.query.startingPoint} with a range of ${req.query.range}`
  );
};

module.exports = {
  getRangeOfQuizzes
};
