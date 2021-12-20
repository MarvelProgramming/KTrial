import React from 'react'
import QuizShareLink from './QuizShareLink'

export default function QuizCreation_Finished() {
  return (
    <div className="quiz-creation-finished">
      <h1>All Done!</h1>
      <QuizShareLink />
      <button className="filled-btn">Finish</button>
    </div>
  )
}
