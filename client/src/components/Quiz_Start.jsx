import React from 'react'
import QuizShareLink from './QuizShareLink';
import { Link } from 'react-router-dom';
import Header from './Header'

export default function Quiz_Start({ dispatch, quiz }) {
  return (
    <div className="quiz-start">
      {
        quiz ? 
        <div>
          <h1>{quiz.name}</h1>
          <p>Description: <br/>{quiz.description}</p>
          <p>Questions: {quiz.questions.length}</p>
          <Link to="/browse"><button className="hollow-btn">Browse Quizzes</button></Link>
          <button className="filled-btn" onClick={() => {
            dispatch({ type: 'progress_stage' });
          }}>Begin</button>
        </div> : 
        <p>Grabbing quiz...</p>
      }
      
      {quiz && <QuizShareLink shareLink={quiz._id} />}
    </div>
  );
};
