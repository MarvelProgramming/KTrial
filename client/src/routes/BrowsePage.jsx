import React from 'react';
import Header from '../components/Header';
import QuizList from '../components/QuizList';

export default function BrowsePage(props) {
  return (
    <div className="browse-page">
      <Header props={props} />
      <QuizList props={props} username={props.username} />
    </div>
  );
};