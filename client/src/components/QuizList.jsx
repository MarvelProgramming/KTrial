import React, { useState, useEffect } from 'react'
import axios from 'axios';
import QuizListItem from './QuizListItem';

export default function QuizList() {
  const [from, setFrom] = useState(0);
  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = async () => {
    let results = await axios.get(`${window.location.protocol}//${window.location.hostname}:3001/quiz/range?from=${from || 0}&range=${5}`);
    setQuizzes(results.data.quizzes);
    setFrom(results.data.from);
  }

  useEffect(() => {
    getQuizzes();
  }, []);
  
  return (
    <div className="quiz-list">
      {quizzes.map((quiz, index) => (
        <QuizListItem key={index} quiz={quiz} />
      ))}
    </div>
  )
}
