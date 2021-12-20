import React from 'react'
import QuizShareLink from './QuizShareLink';

export default function Quiz_Start() {
  return (
    <div className="quiz-start">
      <div>
        <h1>QuizName</h1>
        <p>Description: The description for the quiz.</p>
        <p>Questions: 1</p>
        <button className="hollow-btn">Browse Quizzes</button>
        <button className="filled-btn">Begin</button>
      </div>
        <QuizShareLink />
    </div>
  )
}
