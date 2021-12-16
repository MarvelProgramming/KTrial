const { Schema } = require('mongoose');

const QuizQuestionSchema = new Schema(
  {
    question: { type: String, required: true },
    description: { type: String, required: true },
    choices: [{ type: Schema.Types.ObjectId, ref: 'QuizQuestionChoice' }]
  },
  { timestamps: true }
);

module.exports = QuizQuestionSchema;
