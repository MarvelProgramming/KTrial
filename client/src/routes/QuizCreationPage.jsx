import React, { useReducer } from "react";
import QuizCreation_Start from "../components/QuizCreation_Start";
import QuizCreation_Questions from "../components/QuizCreation_Questions";
import QuizCreation_Review from '../components/QuizCreation_Review';
import QuizCreation_Finished from "../components/QuizCreation_Finished";

export default function QuizCreationPage (props) {
  const iState = {
    stage: 0,
    quiz: {
      name: 'Default Quiz',
      author: props.username,
      description: '',
      imageUrl: 'nothing',
      questions: [],
      category: 'general',
      isPublic: false,
      userComments: [],
      userScores: [],
      userScoresSum: 0,
      userRatings: [],
      userPositiveRatings: 0,
      userRatingsSum: 0
    }
  }
  
  const reducer = (state, action) => {
    switch(action.type) {
      case 'progress_stage':
        return { ...state, stage: state.stage + 1 };
      case 'regress_stage':
        return { ...state, stage: state.stage - 1};
      case 'update_quiz':
        return { ...state, quiz: { ...state.quiz, ...action.update } };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, iState);

  const getCurrentPage = () => {
    switch(state.stage) {
      case 1:
        return <QuizCreation_Questions dispatch={dispatch} state={state} props={props} />
      case 2:
        return <QuizCreation_Review dispatch={dispatch} quiz={state.quiz} />
      case 3:
        return <QuizCreation_Finished dispatch={dispatch} quiz={state.quiz} props={props} />
      default:
      case 0:
        return <QuizCreation_Start dispatch={dispatch} quiz={state.quiz} />
    }
  }
  
  return getCurrentPage();
};