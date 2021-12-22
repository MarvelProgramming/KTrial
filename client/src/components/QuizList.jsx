import React, { useState, useEffect } from 'react'
import axios from 'axios';
import QuizListItem from './QuizListItem';

export default function QuizList(props) {
  const [from, setFrom] = useState(0);
  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = async () => {
    let results = await axios.get(`${window.location.protocol}//${window.location.hostname}:3001/quiz/range?from=${from || 0}&range=${5}&public=true`);
    setQuizzes(results.data.quizzes);
  }

  useEffect(() => {
    getQuizzes();
  }, []);
  
  return (
    <div className="quiz-list">
    {
      quizzes.length ? 

      quizzes.map((quiz, index) => (
        <QuizListItem key={index} props={props} quiz={quiz} />
      )) :
    <p style={{ margin: 'auto auto' }}>No quizzes to show</p>
    }
    </div>
  )
}
