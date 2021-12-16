const { Schema } = require('mongoose');

const QuizQuestionSchema = new Schema(
  {
    question: { type: String, required: true },
    description: { type: String, required: true },
    timesAnsweredCorrectly: { type: Number, required: true },
    timesAnsweredIncorrectly: { type: Number, required: true },
    choices: [{ type: Schema.Types.ObjectId, ref: 'QuizQuestionChoice' }]
  },
  { timestamps: true }
);

module.exports = QuizQuestionSchema;
