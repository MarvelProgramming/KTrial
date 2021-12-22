import React from 'react'

export default function QuizListItem({ props, quiz }) {
  return (
    <div className="quiz-list-item">
      <h2>{quiz.name}</h2>
      <p>{quiz.description}</p>
      <button className="hollow-btn" onClick={() => {
        props.props.history.push(`/quiz/${quiz._id}`);
      }}>Take Quiz</button>
    </div>
  )
}
