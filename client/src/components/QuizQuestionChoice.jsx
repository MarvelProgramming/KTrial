import React from 'react'

export default function QuizQuestionChoice({ choice, type, index, dispatch }) {  
  return (
    <div className="quiz-question-choice">
      <input id={index} type={type} name="question-choice" onChange={(e) => {
        dispatch({ type: 'set_question_choice', chosen: e.target.checked, choiceIndex: index });
      }} />
      <label htmlFor={index}>{choice.choice}</label>
    </div>
  )
}
