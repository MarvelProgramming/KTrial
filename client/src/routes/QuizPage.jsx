import React from 'react'
import Header from '../components/Header'
import Quiz_Start from '../components/Quiz_Start'
import Quiz_Question from '../components/Quiz_Question';
import Quiz_Finished from '../components/Quiz_Finished';

export default function QuizPage() {
  return (
  <div className="quiz-page">
    {/* <Header /> */}
    <Quiz_Finished />
  </div>
  );
};
