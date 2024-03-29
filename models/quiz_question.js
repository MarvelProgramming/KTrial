const { Schema } = require('mongoose');

const QuizQuestionSchema = new Schema(
  {
    question: { type: String, required: true },
    description: { type: String, required: false },
    type: { type: String, required: true },
    timesAnsweredCorrectly: { type: Number, required: true },
    timesAnsweredIncorrectly: { type: Number, required: true },
    choices: [{ choice: String, isCorrect: Boolean }]
  },
  { timestamps: true }
);

module.exports = QuizQuestionSchema;
