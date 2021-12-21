const { Quiz, QuizQuestion } = require('../models');

const getRangeOfQuizzes = async (req, res) => {
  console.log(
    `starting from ${req.query.startingPoint} with a range of ${req.query.range}`
  );
  res.send(
    `starting from ${req.query.startingPoint} with a range of ${req.query.range}`
  );
};

const createQuiz = async (req, res) => {
  const questionResult = await QuizQuestion.insertMany(req.body.questions);
  const quizResult = await Quiz.insertMany({
    ...req.body,
    questions: questionResult
  });
  res.status(201).send(quizResult);
};

const addQuestion = async (req, res) => {
  const result = await Quiz.insertMany(req.body);
  res.status(201).send(`Inserted ${result}`);
};

module.exports = {
  getRangeOfQuizzes,
  createQuiz,
  addQuestion
};
