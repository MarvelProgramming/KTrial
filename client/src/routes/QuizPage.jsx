import React, { useEffect, useReducer } from 'react'
import Quiz_Start from '../components/Quiz_Start'
import Quiz_Question from '../components/Quiz_Question';
import Quiz_Finished from '../components/Quiz_Finished';
import axios from 'axios';

export default function QuizPage(props) {
  let quizId = props.match.params.id;

  const iState = {
    quiz: null,
    currentQuestion: 0,
    stage: 0,
    questionIndex: 0
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'progress_stage':
        return { ...state, stage: state.stage + 1 };
      case 'goto_next_question':
        if(state.currentQuestion >= state.quiz.questions.length - 1) {
          return { ...state, stage: state.stage + 1 };
        }

        return { ...state, currentQuestion: state.currentQuestion + 1 };
      case 'set_quiz':
        return { ...state, quiz: action.quiz };
      case 'set_question_choices':
        let quiz = state.quiz;
        quiz.questions[state.currentQuestion].choices = action.choices;
        return { ...state, quiz: quiz }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, iState);

  useEffect(() => {
    const getQuizById = async () => {
      let result = await axios.get(`${window.location.protocol}//${window.location.hostname}:3001/quiz/${quizId}`);
      dispatch({ type: 'set_quiz', quiz: result.data });
    };

    getQuizById();
  }, []);

  const getCurrentPage = () => {
    switch(state.stage) {
      case 0:
        return <Quiz_Start dispatch={dispatch} quiz={state.quiz} />;
      case 1:
        return <Quiz_Question dispatch={dispatch} question={state.quiz.questions[state.currentQuestion]} questionIndex={state.questionIndex} questionCount={state.quiz.questions.length} />;
      case 2:
        return <Quiz_Finished props={props} quiz={state.quiz} />
    }
  }

  return (
  <div className="quiz-page">
    {getCurrentPage()}
  </div>
  );
};
