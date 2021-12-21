import React from 'react'
import QuizQuestionChoice from './QuizQuestionChoice'

export default function QuizQuestion({ question }) {
  const getInputType = () => {
    switch(question.type.toLowerCase()) {
      case 'multiple choice':
        return 'checkbox';
      default:
      case 'single choice':
        return 'radio';
    }
  }
  
  return (
    <div className="quiz-question">
      <progress max="100" value="80"/>
      <h1>{question.question || 'No question set!'}</h1>
      <p>{question.description || 'No description set'}</p>
      <p>Choose an answer:</p>
      {question.choices.map((choice, index) => (
        <QuizQuestionChoice key={index} choice={choice} id={index} type={getInputType()} />
      ))}
      <button className="filled-btn">Next Question</button>
    </div>
  )
}
