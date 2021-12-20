import React from 'react'
import QuizQuestion from './QuizQuestion'

export default function QuizCreation_Questions() {
  return (
    <div className="quiz-creation-questions">
      <div className="quiz-creation-questions-config1">
        <button className="back-btn">back</button>
        <br />
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
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
        </form>
      </div>
      <div className="quiz-creation-questions-config2">
        <button className="hollow-btn">Add Question</button>
        <button className="filled-btn">Finish Quiz</button>
        <button>Delete Question</button>
      </div>
      <QuizQuestion />
    </div>
  );
};
