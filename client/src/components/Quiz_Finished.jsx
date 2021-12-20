import React from 'react'

export default function Quiz_Finished() {
  return (
    <div className="quiz-finished">
      <h1>Finished!</h1>
      <p>You scored 58/100</p>
      <button className="hollow-btn">Try Again</button>
      <button className="filled-btn">Done</button>
    </div>
  )
}
