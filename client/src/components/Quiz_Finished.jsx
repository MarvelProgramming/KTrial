import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Quiz_Finished({ props, quiz }) {

  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  useEffect(() => {
    const getResults = async () => {
      let result = await axios.post(`${window.location.protocol}//${window.location.hostname}:3001/quiz/${quiz._id}/grade`, quiz.questions);
      console.log(result);
      setCorrectAnswers(result.data);
    }
    getResults();
  });
  
  return (
    <div className="quiz-finished">
      <h1>Finished!</h1>
      <p>You answered {(correctAnswers / quiz.questions.length * 100).toFixed(0)}% correctly!</p>
      <button className="hollow-btn" onClick={() => {
        window.location.reload();
      }}>Try Again</button>
      <button className="filled-btn" onClick={() => {
        props.history.push('/browse');
      }}>Done</button>
    </div>
  )
}
