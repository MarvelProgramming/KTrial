import React, { useState } from 'react'
import axios from 'axios';

export default function QuizListItem({ props, quiz, quizIndex, updateQuiz, deleteQuiz }) {

  const [rating, setRating] = useState(0);
  
  const rateQuiz = async (newRating) => {
    if(rating === newRating){
      return;
    }

    let result = await axios.put(`${window.location.protocol}//${window.location.hostname}:3001/quiz/${quiz._id}?rating=${newRating}`);
    setRating(newRating);
    updateQuiz(quizIndex, result.data);
  }
  
  return (
    <div className="quiz-list-item">
      <h2>{quiz.name}</h2>
      <div className="quiz-ratings-container">
        <i className={`quiz-rating${rating === 1 ? ' quiz-rating-chosen' : ''} fas fa-thumbs-up`} onClick={() => {
          rateQuiz(1);
        }}><span>{quiz.userPositiveRatings || ''}</span></i>
        <i className={`quiz-rating${rating === -1 ? ' quiz-rating-chosen' : ''} fas fa-thumbs-up`} onClick={() => {
          rateQuiz(-1);
        }}></i>
      </div>
      <p>{quiz.description}</p>
      <div className="quiz-list-item-config-area">
        <button className="filled-btn" onClick={() => {
          props.props.history.push(`/quiz/${quiz._id}`);
        }}>Take Quiz</button>
        {
          quiz.isAuthor && (
            <button onClick={() => {
              deleteQuiz(quizIndex);
            }}>Delete Quiz</button>
          )
        }
      </div>
    </div>
  )
}
