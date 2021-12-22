import React, { useEffect } from 'react'

export default function QuizQuestionChoice({ choice, type, index, dispatch, isDisabled }) {  

  useEffect(() => {
    dispatch({ type: 'set_question_choice', chosen: false, choiceIndex: index });
  }, [])
  
  return (
    <div className="quiz-question-choice">
      <input id={index} type={type} name="question-choice" checked={choice.chosen} disabled={isDisabled || false} onChange={(e) => {
        dispatch({ type: 'set_question_choice', chosen: e.target.checked, choiceIndex: index });
      }} />
      <label htmlFor={index}>{choice.choice}</label>
    </div>
  )
}
