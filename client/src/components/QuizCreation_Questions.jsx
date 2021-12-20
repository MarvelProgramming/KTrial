import React from 'react'
import Quiz_Question from './Quiz_Question'

export default function QuizCreation_Questions({ dispatch, state }) {
  return (
    <div className="quiz-creation-questions">
      <div className="quiz-creation-questions-config1">
        <button className="back-btn">back</button>
          <label htmlFor="quiz-question-text-input">Question</label>
          <input id="quiz-question-text-input" placeholder="Enter question here" />
          <label htmlFor="quiz-question-description-input">Description <span>(optional)</span></label>
          <textarea id="quiz-question-description-input"></textarea>
          <label htmlFor="quiz-question-types-input">Type</label>
          <select id="quiz-question-types-input">
            <option>Single Choice</option>
            <option>Multiple Choice</option>
          </select>
          <br />
          <label htmlFor="quiz-question-answers-input">Answers</label>
          <br />
          <input id="quiz-question-answers-input" placeholder="Add answer" />
      </div>
      <div className="quiz-creation-questions-config2">
        <button className="hollow-btn">Add Question</button>
        <button className="filled-btn" onClick={() => {
          dispatch({ type: 'progress_stage' });
        }}>Finish Quiz</button>
        <button>Delete Question</button>
      </div>
      <Quiz_Question />
    </div>
  );
};
