import React from 'react'

export default function QuizCreation_Review({ dispatch, quiz }) {
  return (
    <div className="quiz-creation-review">
      <div>
        <h1>Review</h1>
        <p>Quiz Name: {quiz.name}</p>
        <p>Description: <br/>{quiz.description}</p>
        <p>Questions: {quiz.questions.length}</p>
        <p>Is Public: {quiz.isPublic.toString()}</p>
        <button className="hollow-btn" onClick={() => {
          dispatch({ type: 'regress_stage' });
        }}>Back</button>
        <button className="filled-btn" onClick={() => {
          dispatch({ type: 'progress_stage' });
        }}>Done</button>
      </div>
    </div>
  )
}
