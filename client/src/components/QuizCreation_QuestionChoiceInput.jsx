import React from 'react'

export default function QuizCreation_QuestionChoiceInput({ index, choice, handleQuestionChoiceInput }) {
  return (
    <div className="quiz-question-choice-input">
      <input type="text" placeholder="Add answer here" value={choice.choice} onChange={(e) => {
        handleQuestionChoiceInput(e.target.value, index, 'choice');
      }} />
      <input type="checkbox" onChange={(e) => {
        handleQuestionChoiceInput(e.target.checked, index, 'isCorrect')
      }} checked={choice.isCorrect} />
    </div>
  );
};
