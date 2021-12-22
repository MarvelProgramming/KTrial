const { Quiz, QuizQuestion } = require('../models');

const getRangeOfQuizzes = async (req, res) => {
  let from = parseInt(req.query.from);
  let range = parseInt(req.query.range);

  let quizzes = await Quiz.find({ isPublic: req.query.public })
    .skip(from)
    .limit(range);

  res.send({ from, quizzes });
};

const createQuiz = async (req, res) => {
  const questionResult = await QuizQuestion.insertMany(req.body.questions);
  const quizResult = await Quiz.insertMany({
    ...req.body,
    questions: questionResult
  });
  res.status(201).send(quizResult);
};

const getQuizById = async (req, res) => {
  const quiz = await Quiz.findOne({ _id: req.params.id }).populate('questions');

  quiz.questions.forEach((question) => {
    question.choices = question.choices.map((choice) => {
      return { choice: choice.choice };
    });
  });

  res.status(200).send(quiz);
};

const gradeQuiz = async (req, res) => {
  let quiz = await Quiz.findOne({ _id: req.params.id }).populate('questions');
  let questions = quiz.questions;
  let userQuestions = req.body;

  let correctAnswers = questions.filter((question, questionIndex) => {
    return !question.choices.some(
      (choice, choiceIndex) =>
        choice.isCorrect !==
        userQuestions[questionIndex].choices[choiceIndex].checked
    );
  }).length;

  res.status(200).json(correctAnswers);
};

const getQuestionById = async (req, res) => {
  const question = await QuizQuestion.findOne({ _id: req.query.id });
  res.status(200).send(question);
};

const addQuestion = async (req, res) => {
  const result = await Quiz.insertMany(req.body);
  res.status(201).send(`Inserted ${result}`);
};

module.exports = {
  getRangeOfQuizzes,
  createQuiz,
  getQuizById,
  gradeQuiz,
  getQuestionById,
  addQuestion
};
