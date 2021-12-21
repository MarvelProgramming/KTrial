const mongoose = require('mongoose');
const QuizSchema = require('./quiz');
const QuizQuestionSchema = require('./quiz_question');

const Quiz = mongoose.model('Quiz', QuizSchema);
const QuizQuestion = mongoose.model('QuizQuestion', QuizQuestionSchema);

module.exports = {
  Quiz,
  QuizQuestion
};
