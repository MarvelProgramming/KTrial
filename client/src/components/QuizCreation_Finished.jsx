import React, { useState, useEffect } from 'react'
import QuizShareLink from './QuizShareLink'
import axios from 'axios';
import { BASE_URL } from '../globals'

export default function QuizCreation_Finished({ quiz, props }) {
  const [shareLink, setShareLink] = useState('');

  useEffect(() => {
    const uploadQuiz = async () => {
      quiz.questions.forEach(question => {
        question.choices = question.choices.filter(choice => choice.choice);
      });
      
      let result = await axios.post(`${BASE_URL}/quiz`, quiz);
      setShareLink(result.data[0]._id);
    }
    uploadQuiz();
  }, []);

  return (
    <div className="quiz-creation-finished">
      {
        shareLink ? <div>
        <h1>All Done!</h1>
        <QuizShareLink shareLink={shareLink} />
        <button className="filled-btn" onClick={() => {
          props.history.push('/browse');
        }}>Finish</button>
      </div> : <p>Generating quiz link...</p>
      }
    </div>
  )
}
