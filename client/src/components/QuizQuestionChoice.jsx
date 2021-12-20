import React from 'react'

export default function QuizQuestionChoice({ choice, type, id }) {
  return (
    <div className="quiz-question-choice">
      <input id={id} type={type} name="question-choice" />
      <label htmlFor={id}>{choice}</label>
    </div>
  )
}
