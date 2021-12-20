import React from 'react'
import Header from './Header';

export default function QuizCreation_Start({ dispatch }) {
  return (
    <div className="quiz-creation-start">
      <Header />
      <main>
        <h1 className="page-title">Create Quiz</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'progress_stage' });
        }}>
          <label className="quiz-input-label" htmlFor="quiz-name-input">
          Name
          <br/>
          </label>
          <input id="quiz-name-input" placeholder="Enter your quiz name here" required onChange={(e) => {
            dispatch({ type: 'update_quiz', update: { name: e.target.value } });
          }} />
          <label className="quiz-input-label" htmlFor="quiz-description-textarea">
            Description
            <br/>
            </label>
            <textarea id="quiz-description-textarea" placeholder="Enter your quiz description here" required onChange={(e) => {
              dispatch({ type: 'update_quiz', update: { description: e.target.value } });
            }} />
          <label htmlFor="make-public-checkbox">
          <input id="make-public-checkbox" type="checkbox" name="make-public-checkbox" value="false" onChange={(e) => {
            dispatch({ type: 'update_quiz', update: { isPublic: e.target.checked } });
          }} />
          Make Public
          </label>
          <button className="hollow-btn" type="submit">Create</button>
        </form>
      </main>
    </div>
  );
};
