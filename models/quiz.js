const { Schema } = require('mongoose');

const QuizSchema = new Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'QuizQuestion' }],
    isPublic: { type: Boolean, required: true },
    userComments: [{ type: Schema.Types.ObjectId, ref: 'UserComment' }],
    userScores: [{ type: Number, required: true }],
    userScoresSum: { type: Number, required: true },
    userRatings: [{ type: Number, required: true }],
    userRatingsSum: { type: Number }
  },
  { timestamps: true }
);

module.exports = QuizSchema;
