import React, { useState, useEffect } from 'react'
import axios from 'axios';
import QuizListItem from './QuizListItem';

export default function QuizList(props) {
  const [from, setFrom] = useState(0);
  const [quizzes, setQuizzes] = useState([]);

  const updateQuiz = (index, update) => {
    let newQuizzes = [...quizzes];
    newQuizzes[index] = update;
    setQuizzes(newQuizzes);
  }
  
  const deleteQuiz = async (index) => {
    let result = await axios.delete(`${window.location.protocol}//${window.location.hostname}:3001/quiz/${quizzes[index]._id}?username=${props.username}`);
    
    if(result.data) {
      let newQuizzes = [...quizzes];
      newQuizzes.splice(index, 1);
      setQuizzes(newQuizzes);
    }
  }

  const getQuizzes = async () => {
    let results = await axios.get(`${window.location.protocol}//${window.location.hostname}:3001/quiz/range?from=${from || 0}&range=${5}&public=true&username=${props.username}`);
    return results.data;
  }

  useEffect(() => {
    // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    let isMounted = true;
    getQuizzes().then((data) => {
      if(isMounted) {
        setQuizzes(data);
      }
    });
    return () => { isMounted = false }
  }, []);
  
  return (
    <div className="quiz-list">
    {
      quizzes.length ? 

      quizzes.map((quiz, index) => (
        <QuizListItem key={index} props={props} quiz={quiz} quizIndex={index} updateQuiz={updateQuiz} deleteQuiz={deleteQuiz} />
      )) :
    <p style={{ margin: 'auto auto' }}>No quizzes to show</p>
    }
    </div>
  )
}
