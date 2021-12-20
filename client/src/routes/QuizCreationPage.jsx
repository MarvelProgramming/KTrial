import React, { useReducer } from "react";
import QuizCreation_Start from "../components/QuizCreation_Start";
import QuizCreation_Questions from "../components/QuizCreation_Questions";
import QuizCreation_Review from '../components/QuizCreation_Review';
import QuizCreation_Finished from "../components/QuizCreation_Finished";

export default function QuizCreationPage () {
  const iState = {
    stage: 0,
    quiz: {
      name: 'Default Quiz',
      description: 'This the default quiz',
      imageUrl: '',
      questions: [],
      category: 'general',
      isPublic: false,
      userComments: [],
      userScores: [],
      userScoresSum: 0,
      userRatings: [],
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
        console.log(`Updated quiz!`);
        console.log({ ...state, quiz: { ...state.quiz, ...action.update } });
        return { ...state, quiz: { ...state.quiz, ...action.update } };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, iState);

  const getCurrentPage = () => {
    switch(state.stage) {
      case 1:
        return <QuizCreation_Questions dispatch={dispatch} state={state} />
      case 2:
        return <QuizCreation_Review dispatch={dispatch} state={state} />
      case 3:
        return <QuizCreation_Finished dispatch={dispatch} state={state} />
      default:
      case 0:
        return <QuizCreation_Start dispatch={dispatch} />
    }
  }
  
  return getCurrentPage();
};