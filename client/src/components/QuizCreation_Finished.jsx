import React, { useEffect } from 'react'
import QuizShareLink from './QuizShareLink'
import axios from 'axios';

export default function QuizCreation_Finished({ dispatch, quiz }) {

  useEffect(() => {
    const uploadQuiz = async () => {
      let result = await axios.post('http://localhost:3001/quiz', quiz);
      console.log(result);
    }
    uploadQuiz();
  }, []);
  
  return (
    <div className="quiz-creation-finished">
      <h1>All Done!</h1>
      <QuizShareLink />
      <button className="filled-btn">Finish</button>
    </div>
  )
}
