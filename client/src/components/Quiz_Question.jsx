import React, { useState } from 'react'
import QuizQuestionChoice from './QuizQuestionChoice'

export default function QuizQuestion({ dispatch, question, questionIndex, questionCount }) {
  const getInputType = () => {
    switch(question.type.toLowerCase()) {
      case 'multiple choice':
        return 'checkbox';
      default:
      case 'single choice':
        return 'radio';
    };
  };

  return (
    <div className="quiz-question">
      {
        question ? 
          <div onChange={(e) => {
            let newChoices = Array.from(e.target.parentElement.parentElement.children).filter(element => element.className === 'quiz-question-choice').map((element, index) => {
              return { choice: question.choices[index].choice, checked: element.firstChild.checked }
            });

            dispatch({ type: 'set_question_choices', choices: newChoices });
          }}>
            <progress max="100" value={((questionIndex + 1) / (questionCount) * 100) || 0}/>
            <h1>{question.question}</h1>
            <p>{question.description}</p>
            <p>Choose an answer:</p>
            {question.choices.map((choice, index) => (
              <QuizQuestionChoice key={index} choice={choice} index={index} type={getInputType()} dispatch={dispatch} />
            ))}
            <button className="filled-btn" onClick={() => {
              dispatch({ type: 'goto_next_question' });
            }}>{ questionIndex < questionCount - 1 ? 'Next Question' : 'Finish Quiz'}</button>
          </div> : 
          <p>Grabbing question</p>
      }
      
    </div>
  )
}
