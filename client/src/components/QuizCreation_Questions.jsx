import React, { useState, useEffect } from 'react'
import Quiz_Question from './Quiz_Question'
import QuizCreation_QuestionChoiceInput from './QuizCreation_QuestionChoiceInput';

export default function QuizCreation_Questions({ dispatch, state, props }) {
  const defaultQuestion = {
    question: '',
    description: '',
    type: 'single choice',
    timesAnsweredCorrectly: 0,
    timesAnsweredIncorrectly: 0,
    choices: [
      {
        choice: '',
        isCorrect: false
      },
      {
        choice: '',
        isCorrect: false
      },
      {
        choice: '',
        isCorrect: false
      },
      {
        choice: '',
        isCorrect: false
      },
    ]
  };
  
  const handleQuestionChoiceInput = (value, index, property) => {
    let choices = [...state.quiz.questions][state.quiz.questions.length - 1].choices;
    choices[index][property] = value;
    updateCurrentQuestion('choices', choices);
  }
  
  const addNewQuestion = () => {
    dispatch({ type: 'update_quiz', update: { questions: [...state.quiz.questions, defaultQuestion] } });
    setQuestion(defaultQuestion);
  }

  const removeCurrentQuestion = () => {
    let questions = state.quiz.questions.slice(0, state.quiz.questions.length - 1);
    dispatch({ type: 'update_quiz', update: { questions: questions } });
    if(!questions.length) {
      dispatch({ type: 'regress_stage' });
    } else {
      setQuestion(questions[questions.length - 1]);
    }
  }
  
  const updateCurrentQuestion = (property, newValue) => {
    let questions = [...state.quiz.questions];
    questions[questions.length - 1][property] = newValue;
    setQuestion(questions[questions.length - 1]);
    dispatch({ type: 'update_quiz', update: { questions: questions } });
  }

  const isFormValid = () => {
    return question.question && question.choices.some(choice => choice.isCorrect) && question.choices.reduce((acc, choice) => { return acc + (choice.choice ? 1 : 0) }, 0) >= 2;
  }

  const [question, setQuestion] = useState(defaultQuestion);

  useEffect(() => {
    addNewQuestion();
  }, []);

  return (
    <div className="quiz-creation-questions">
      <div className="quiz-creation-questions-config1">
        <button className="back-btn" onClick={() => {
          window.location.reload();
        }}>cancel</button>
        <form id="question-form" onSubmit={(e)=>{
          e.preventDefault();
        }}>
          <label htmlFor="quiz-question-text-input">Question</label>
          <input id="quiz-question-text-input" placeholder="Enter question here" value={question.question} required onChange={(e) => {
            updateCurrentQuestion('question', e.target.value);
          }} />
          <label htmlFor="quiz-question-description-input">Description <span>(optional)</span></label>
          <textarea id="quiz-question-description-input" value={question.description} onChange={(e) => {
            updateCurrentQuestion('description', e.target.value);
          }}></textarea>
          <label htmlFor="quiz-question-types-input">Type</label>
          <select id="quiz-question-types-input" value={question.type || 'Single Choice'} onChange={(e) => {
            updateCurrentQuestion('type', e.target.value);
          }}>
            <option>Single Choice</option>
            <option>Multiple Choice</option>
          </select>
          <br />
          <label htmlFor="quiz-question-answers-input">Answers</label>
          <br />
          {[
            <QuizCreation_QuestionChoiceInput key="0" choice={question.choices[0]} index="0" handleQuestionChoiceInput={handleQuestionChoiceInput} />,
            <QuizCreation_QuestionChoiceInput key="1" choice={question.choices[1]} index="1" handleQuestionChoiceInput={handleQuestionChoiceInput} />,
            <QuizCreation_QuestionChoiceInput key="2" choice={question.choices[2]} index="2" handleQuestionChoiceInput={handleQuestionChoiceInput} />,
            <QuizCreation_QuestionChoiceInput key="3" choice={question.choices[3]} index="3" handleQuestionChoiceInput={handleQuestionChoiceInput} />,
          ]}
        </form>
      </div>
      <div className="quiz-creation-questions-config2">
        <button type="submit" form="question-form" className="hollow-btn" onClick={() => {
          if(!isFormValid()) {
            return;
          }
          
          addNewQuestion();
        }}>Add Question</button>
        <button type="submit" form="question-form" className="filled-btn" onClick={() => {
          if(!isFormValid()) {
            return;
          }
          dispatch({ type: 'progress_stage' });
        }}>Finish Quiz</button>
        <button onClick={() => {
          removeCurrentQuestion();
        }}>Delete Question</button>
      </div>
      <Quiz_Question question={question} isDisabled={true} />
    </div>
  );
};
