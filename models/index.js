const mongoose = require('mongoose');
const QuizSchema = require('./quiz');
const QuizQuestionSchema = require('./quiz_question');
const QuizQuestionChoiceSchema = require('./quiz_question_choice');

const Quiz = mongoose.model('Quiz', QuizSchema);
const QuizQuestion = mongoose.model('QuizQuestion', QuizQuestionChoiceSchema);
const QuizQuestionChoice = mongoose.model(
  'QuizQuestionChoice',
  QuizQuestionChoiceSchema
);

module.exports = {
  Quiz,
  QuizQuestion,
  QuizQuestionChoice
};
