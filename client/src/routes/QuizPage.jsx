import React from 'react'
import Header from '../components/Header'
import Quiz_Start from '../components/Quiz_Start'
import Quiz_Question from '../components/Quiz_Question';

export default function QuizPage() {
  return (
  <div className="quiz-page">
    <Header />
    <Quiz_Question />
  </div>
  );
};
