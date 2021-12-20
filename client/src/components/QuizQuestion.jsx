import React from 'react'
import QuizQuestionChoice from './QuizQuestionChoice'

export default function QuizQuestion() {
  return (
    <div className="quiz-question">
      <h1>What color is the sky?</h1>
      <p>Description text would go here, but is completely optional</p>
      <p>Choose an answer:</p>
      <QuizQuestionChoice choice="Blue" id="1" type={'radio'} />
      <QuizQuestionChoice choice="Yellow" id="2" type={'radio'} />
      <QuizQuestionChoice choice="Green" id="3" type={'radio'} />
    </div>
  )
}
