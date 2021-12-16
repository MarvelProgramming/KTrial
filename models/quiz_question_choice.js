const { Schema } = require('mongoose');

const QuizQuestionChoiceSchema = new Schema(
  {
    choice: { type: String, required: true },
    isCorrect: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = QuizQuestionChoiceSchema;
